const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  medicines: [
    {
      name: String,
      dosage: String,
      frequency: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
