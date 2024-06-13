// src/components/Hero.js
import React from 'react';
import '../assets/styles/Hero.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover our services and solutions</p>
        <a href="#services" className="hero-button">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
