function getNestedValue(obj, path) {
    const parts = path.split('.');
    let current = obj;
  
    for (const part of parts) {
      if (Array.isArray(current)) {
        const index = parseInt(part, 10);
        if (!isNaN(index)) {
          current = current[index];
        } else {
          current = current.map(item => item?.[part]).filter(v => v !== undefined);
        }
      } else {
        current = current?.[part];
      }
      if (current === undefined) break;
    }
  
    return current;
  }
  
  function formatFinding(finding) {
    return {
      title: finding.Title,
      severity: getNestedValue(finding, "Severity.Label"),
      workflowStatus: getNestedValue(finding, "Workflow.Status"),
      region: finding.Region,
      awsAccountId: finding.AwsAccountId,
      productName: finding.ProductName || getNestedValue(finding, "ProductFields.aws/securityhub/ProductName"),
      resourceId: getNestedValue(finding, "Resources.0.Id") || getNestedValue(finding, "ProductFields.Resources:0/Id"),
      complianceStatus: getNestedValue(finding, "Compliance.Status"),
      updatedAt: finding.UpdatedAt
    };
  }
  
  function filterFindings(findings, filters = {}) {
    return findings.filter(finding =>
      Object.entries(filters).every(([key, condition]) => {
        const actual = getNestedValue(finding, key);
  
        if (typeof condition === 'object' && condition !== null && condition.includes) {
          const value = condition.includes;
          if (Array.isArray(actual)) {
            return actual.some(item =>
              typeof item === 'object'
                ? Object.values(item).includes(value)
                : item === value
            );
          }
          return false;
        }
  
        return actual == condition;
      })
    );
  }
  
  module.exports = { getNestedValue, formatFinding, filterFindings };
  