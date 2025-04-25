const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // import cors
const findingsRoutes = require('./routes/security_hub.js');

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/security-hub/api', findingsRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
