// backend/server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/prescriptions', require('./routes/prescriptions'));

app.get('/', (req, res) => {
  res.send('Welcome to the Medicine Prescription Scanner API');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
