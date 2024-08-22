// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>Welcome to the Medicine Prescription Scanner</h2>
        <p>Your health companion that simplifies prescription management.</p>
        <Link to="/scanner" className="button-primary">Scan Your Prescription</Link>
      </section>
    </div>
  );
};

export default Home;
