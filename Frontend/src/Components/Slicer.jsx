import React from 'react';
import { useDashboard } from './DashboardContext';

const Slicer = () => {
  const { 
    region, setRegion, 
    resourceType, setResourceType, 
    timePeriod, setTimePeriod, 
    severityLevel, setSeverityLevel, 
    complianceStandard, setComplianceStandard, 
    findingType, setFindingType, 
    accountId, setAccountId, 
    status, setStatus 
  } = useDashboard();

  return (
    <div className="flex  bg-gray-50 gap-20 justify-items-center">
      {/* Region Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Region</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="all">All Regions</option>
          <option value="us-west-2">us-west-2</option>
          <option value="us-east-1">us-east-1</option>
          <option value="ap-southeast-1">ap-southeast-1</option>
        </select>
      </div>

      {/* Resource Type Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Resource Type</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={resourceType}
          onChange={(e) => setResourceType(e.target.value)}
        >
          <option value="all">All Resource Types</option>
          <option value="AwsCloudTrailTrail">AwsCloudTrailTrail</option>
          <option value="EC2">EC2</option>
        </select>
      </div>

      {/* Time Period Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Time Period</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          <option value="all">All Time Periods</option>
          <option value="last-24-hours">Last 24 Hours</option>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>

      {/* Severity Level Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Severity Level</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={severityLevel}
          onChange={(e) => setSeverityLevel(e.target.value)}
        >
          <option value="all">All Severities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
          <option value="informational">Informational</option>
        </select>
      </div>

      {/* Compliance Standard Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Compliance Standard</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={complianceStandard}
          onChange={(e) => setComplianceStandard(e.target.value)}
        >
          <option value="all">All Compliance Standards</option>
          <option value="CIS-AWS">CIS AWS Foundations</option>
          <option value="PCI-DSS">PCI-DSS</option>
          <option value="HIPAA">HIPAA</option>
        </select>
      </div>

      {/* Finding Type Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Finding Type</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={findingType}
          onChange={(e) => setFindingType(e.target.value)}
        >
          <option value="all">All Finding Types</option>
          <option value="vulnerability">Vulnerabilities</option>
          <option value="misconfiguration">Misconfigurations</option>
          <option value="audit">Audits</option>
        </select>
      </div>

      {/* Account ID Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Account ID</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        >
          <option value="all">All Accounts</option>
          <option value="account-1">Account 1</option>
          <option value="account-2">Account 2</option>
        </select>
      </div>

      {/* Status Slicer */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Status</label>
        <select
          className="bg-gray-300 p-2 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="archived">Archived</option>
          <option value="suppressed">Suppressed</option>
        </select>
      </div>
    </div>
  );
};

export default Slicer;
