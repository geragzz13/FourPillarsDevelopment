import React from 'react';
import '../assets/styles/Hero.css';
import videoSource from '../assets/videos/FourPillarsBackgroundVideo.mp4';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <div className="hero-text-box">
          <h1 className='display-1'>Welcome to Four Pillars Development</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
