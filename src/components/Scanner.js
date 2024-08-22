// src/components/Scanner.js

import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import axios from 'axios';

const Scanner = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleScan = () => {
    setLoading(true);
    if (image) {
      Tesseract.recognize(
        image,
        'eng',
        {
          logger: (m) => console.log(m),
        }
      ).then(({ data: { text } }) => {
        setText(text);
        // Send OCR data to the backend
        axios.post('http://localhost:5000/api/prescriptions', {
          imageUrl: image,
          text: text,
        })
        .then(response => {
          console.log('Data saved:', response.data);
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
        setLoading(false);
      });
    }
  };

  return (
    <div className="container">
      <h2>Scan Your Prescription</h2>
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={image} alt="Prescription" style={{ maxWidth: '100%', marginTop: '20px' }} />}
      <button onClick={handleScan} className="button-primary">Scan</button>
      {loading && <p>Processing...</p>}
      <p>{text}</p>
    </div>
  );
};

export default Scanner;
