const { SecurityHubClient, GetFindingsCommand } = require('@aws-sdk/client-securityhub');
const fs = require('fs');
const path = require('path');
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

// const filterFindingsHandler = async (req, res) => {
//   try {
//     const filters = req.body;
    
//     const findingsResponse = await securityHubClient.send(new GetFindingsCommand({}));
//     const findings = findingsResponse.Findings || [];

//     const filtered = filterFindings(findings, filters);
//     const result = filtered.map(formatFinding);

//     res.json({ count: result.length, findings: result });
//   } catch (err) {
//     console.error('Error fetching findings:', err);
//     res.status(500).json({ error: 'Failed to fetch findings from Security Hub' });
//   }
// };

const filterFindingsHandler = async (req, res) => {
  try {
    const filters = req.body;

    const filePath = path.join(__dirname, '..', 'sampleData.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const findings = JSON.parse(rawData);

    const filtered = filterFindings(findings, filters);
    const result = filtered.map(formatFinding);

    res.json({ count: result.length, findings: result });
  } catch (err) {
    console.error('Error loading local findings:', err);
    res.status(500).json({ error: 'Failed to load findings from local file' });
  }
};

const getControls = (req, res) => {
  const filePath = path.join(__dirname, '..','controls.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Failed to read controls data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    const controls = JSON.parse(data);
    res.status(200).json(controls);
  });
};

module.exports = { filterFindingsHandler, getControls };
