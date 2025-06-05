const express = require('express');
const dotenv = require('dotenv');
const findingsRoutes = require('./routes/security_hub.js');

dotenv.config();

const app = express();
app.use(express.json());

// Use findings routes
app.use('/security-hub/api', findingsRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
