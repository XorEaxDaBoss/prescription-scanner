// src/components/MedicineDetails.js

import React from 'react';

const MedicineDetails = ({ details }) => {
  return (
    <div className="container">
      <h2>Medicine Details</h2>
      {/* Details about the medicine */}
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Dosage:</strong> {details.dosage}</p>
      <p><strong>Instructions:</strong> {details.instructions}</p>
    </div>
  );
};

export default MedicineDetails;
