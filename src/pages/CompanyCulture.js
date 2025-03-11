import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/CompanyCulture.css';
import FourplexInterior from '../assets/images/FourplexInterior.png'; 

const CompanyCulture = () => {
    const sectionVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === "left" ? -200 : 200,
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    return (
        <div className="mission-history-container">
            {/* Banner Section */}
            <div className="banner-section">
                <h1>COMPANY CULTURE</h1>
                <p>Our People & Values</p>
            </div>

            {/* Title Section */}
            <div className="company-stats-title">
                <h2>
                    Over the past 10 years, Four Pillars Development has planned,
                    developed and/or constructed over 26,441 housing units.
                </h2>
            </div>

            {/* Culture Section */}
            <motion.div
                className="mission-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                custom="right"
            >
                <div className="mission-content">
                    <h2>FOCUS AND VISION</h2>
                    <p>
                        At our company, we prioritize collaboration, creativity, and a
                        commitment to excellence. Our team values integrity, growth, and
                        diversity in every aspect of our work.
                    </p>
                </div>
            </motion.div>

            {/* Work/Life Balance Section */}
            <motion.div
                className="history-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                custom="left"
            >
                <div className="history-content">
                    <h2>WORK/LIFE BALANCE</h2>
                    <p>
                        We started with a vision to build a workplace that values people
                        above all. Over the years, we have grown into a team-driven
                        organization, setting benchmarks in our industry.
                    </p>
                </div>
                <div className="history-image">
                    <img src={FourplexInterior} alt="Fourplex Interior Image" />
                </div>
            </motion.div>
        </div>
    );
};

export default CompanyCulture;
