// src/components/PropertyHero.js
import React from 'react';
import '../assets/styles/Hero.css'; // Reuse the same styles
import videoSource from '../assets/videos/FourPillarsBackgroundVideo.mp4';

const PropertyHero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default PropertyHero;
