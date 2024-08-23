const express = require('express');
const axios = require('axios');
const Prescription = require('../models/Prescription');

const router = express.Router();

router.post('/', async (req, res) => {
  const { imageUrl, text } = req.body;

  try {
    const prescription = new Prescription({ imageUrl, text });
    await prescription.save();

    const medicineName = text.split(' ')[0];

    const fdaResponse = await axios.get(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${medicineName}&limit=1`);

    const medicineDetails = fdaResponse.data.results[0];

    res.json({ prescription, medicineDetails });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
