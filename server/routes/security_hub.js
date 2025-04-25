const express = require('express');
const router = express.Router();
const { filterFindingsHandler, getControls } = require('../controllers/security_findings');


router.post('/findings', filterFindingsHandler);
router.get('/controls', getControls);


module.exports = router;