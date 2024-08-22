// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#007BFF', padding: '10px 0', color: '#fff' }}>
      <div className="container">
        <h1>Medicine Prescription Scanner</h1>
        <nav>
          <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
          <Link to="/scanner" style={{ color: '#fff', marginRight: '15px' }}>Scan Prescription</Link>
          <Link to="/dashboard" style={{ color: '#fff' }}>Dashboard</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
