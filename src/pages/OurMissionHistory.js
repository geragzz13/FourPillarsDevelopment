// src/pages/OurMission.js
import React from 'react';
import HeroCarousel from '../components/HeroCarousel'; // Import the HeroCarousel component
import '../assets/styles/OurMission.css'; // Optional: add custom styles for this page

const OurMissionHistory = () => {
    return (
        <div className="our-mission-container">
            {/* Hero Section with Carousel */}
            <section className="hero-section">
                <HeroCarousel />
            </section>

            {/* Mission Content Below the Carousel */}
            <section className="mission-content">
                <h2>Our Mission</h2>
                <p>
                    {/* Add your mission text or content here */}
                    At Four Pillars Development, our mission is to revolutionize the construction and development industry...
                </p>
            </section>
        </div>
    );
};

export default OurMissionHistory;
