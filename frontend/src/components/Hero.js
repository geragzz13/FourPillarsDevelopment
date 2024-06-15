import React from 'react';
import '../assets/styles/Hero.css'; // Ensure correct path to CSS
import videoSource from '../assets/videos/FourPillarsBackgroundVideo.mp4' // Adjust path to video file

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 class='display-1'>Four Pillars Development</h1>
       {/* <p>Discover our services and solutions</p> */}
       {/* <a href="#services" className="hero-button">Learn More</a> */}
      </div>
    </section>
  );
};

export default Hero;
