const express = require('express');
const router = express.Router();
const { filterFindingsHandler } = require('../controllers/security_findings');

router.post('/findings', filterFindingsHandler);

module.exports = router;