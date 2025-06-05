const { SecurityHubClient, GetFindingsCommand } = require('@aws-sdk/client-securityhub');
const { getNestedValue, formatFinding, filterFindings } = require('../utils/helpers');
const dotenv = require('dotenv');
dotenv.config(); 

const securityHubClient = new SecurityHubClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const filterFindingsHandler = async (req, res) => {
  try {
    const filters = req.body;
    
    const findingsResponse = await securityHubClient.send(new GetFindingsCommand({}));
    const findings = findingsResponse.Findings || [];

    const filtered = filterFindings(findings, filters);
    const result = filtered.map(formatFinding);

    res.json({ count: result.length, findings: result });
  } catch (err) {
    console.error('Error fetching findings:', err);
    res.status(500).json({ error: 'Failed to fetch findings from Security Hub' });
  }
};

module.exports = { filterFindingsHandler };
