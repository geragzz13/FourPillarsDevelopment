import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Home.css';
import aboutImage from '../assets/images/aboutImage.jpg';
import FeaturedProperties from '../components/FeaturedProperties';
import Capabilities from '../components/Capabilities'; 

const Home = () => {
    return (
        <div className="home-container">
            {/* Main Title Section with Animation */}
            <motion.h2
                className="home-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Developer & Contractor of Award-Winning Multi-Family Properties
            </motion.h2>

            {/* Introduction Section with Image and Text */}
            <motion.section
                className="introduction-section"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                {/* Left Image Container with Animation */}
                <motion.div
                    className="image-container"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img src={aboutImage} alt="About the Company" />
                </motion.div>

                {/* Right Text Content with Animation */}
                <motion.div
                    className="introduction-content"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2>Four Pillars Development</h2>
                    <p>
                        Four Pillars Development is a leading multi-family construction, development, and property management company headquartered in Edinburg with offices in several locations.
                    </p>
                </motion.div>
            </motion.section>

            {/* Featured Properties Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
            >
                <FeaturedProperties />
            </motion.div>

            {/* Capabilities Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
            >
                <Capabilities />
            </motion.div>

        </div>
    );
};

export default Home;
