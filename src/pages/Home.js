import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Home.css';
import aboutImage from '../assets/images/aboutImage.jpg';
import FeaturedProperties from '../components/FeaturedProperties';

const Home = () => {
    return (
        <div className="home-container">
            {/* Main Title Section */}
            <h2 className="home-title">Developer & Contractor of Award-Winning Multi-Family Properties</h2>

            {/* Introduction Section with Image and Text */}
            <motion.section
                className="introduction-section"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                {/* Left Image Container */}
                <div className="image-container">
                    <img src={aboutImage} alt="About the Company" />
                </div>

                {/* Right Text Content */}
                <div className="introduction-content">
                    <h2>Four Pillars Development</h2>
                    <p>
                        Four Pillars Development is a leading multi-family construction, development, and property management company headquartered in Edinburg with offices in several locations.
                    </p>
                </div>
            </motion.section>

            {/* Featured Properties Section - Now Visible */}
            <FeaturedProperties />
        </div>
    );
};

export default Home;
