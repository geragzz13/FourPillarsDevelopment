// frontend/src/components/Jumbotron.js
import React from 'react';
import logo from '../assets/fourpillarslogo.png';
import '../assets/styles/App.css';

function Jumbotron() {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#131010', textAlign: 'center', padding: '100px 0', marginBottom: '0' }}>
      <div className="container">
        <h1 background-color ='#F9F8DA'>Welcome to Four Pillars Development</h1>
        <p>Your trusted partner in real estate development.</p>
      </div>
    </div>
  );
}

export default Jumbotron;

