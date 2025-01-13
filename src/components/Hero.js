import React from 'react';
import '../assets/styles/Hero.css';
import videoSource from '../assets/videos/FourPillarsBackgroundVideo.mp4';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
