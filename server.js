const express = require('express');
const cors = require('cors');
const connectDB = require('./src/api/config/db');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const prescriptions = require('./src/api/routes/prescriptions');
app.use('/api/prescriptions', prescriptions);

module.exports = app;
