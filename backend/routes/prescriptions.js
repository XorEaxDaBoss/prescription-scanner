// backend/routes/prescriptions.js

const express = require('express');
const axios = require('axios');
const Prescription = require('../models/Prescription');

const router = express.Router();

// @route POST /api/prescriptions
// @desc  Save OCR data and fetch medicine details
router.post('/', async (req, res) => {
  const { imageUrl, text } = req.body;

  try {
    // Save the OCR result to the database
    const prescription = new Prescription({ imageUrl, text });
    await prescription.save();

    // Optional: Add code here to interact with OpenFDA or DrugBank API to fetch medicine details

    res.json(prescription);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
