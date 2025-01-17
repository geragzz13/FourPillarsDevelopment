import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/MissionHistory.css';
import westwoodImage from '../assets/images/westwood4.png'; // For Steady Growth
import FourplexInterior from '../assets/images/FourplexInterior.png'; // For History

const MissionPage = () => {
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
                <h1>ABOUT US</h1>
                <p>Our Mission & History</p>
            </div>

            {/* Mission Section */}
            <motion.div
                className="mission-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                custom="right"
            >
                <div className="mission-content">
                    <h2>Mission</h2>
                    <p>
                        With the cooperation and contributions of our valued team members,
                        Four Pillars Development seeks to create and deliver successful
                        developments to satisfied clients and residents.
                    </p>
                </div>
            </motion.div>

            {/* History Section */}
            <motion.div
                className="history-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                custom="left"
            >
                <div className="history-content">
                    <h2>History</h2>
                    <p>
                        In 2015, Four Pillars Development was founded in Edinburg, Texas.
                        Over the years, our company has planned, developed, and/or constructed
                        numerous housing units, consistently focusing on creating communities
                        that thrive. Since our inception, we have successfully completed
                        a wide range of projects, building a reputation for quality and
                        reliability in the industry.
                    </p>
                </div>
                <div className="history-image">
                    <img src={FourplexInterior} alt="Fourplex Interior Image" />
                </div>
            </motion.div>

            {/* Steady Growth Section */}
            <motion.div
                className="growth-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                custom="right"
            >
                <div className="growth-image">
                    <img src={westwoodImage} alt="Growth Image" />
                </div>
                <div className="growth-content">
                    <h2>Steady Growth</h2>
                    <p>
                        Four Pillars Development continues to expand, driven by a strong
                        commitment to excellence. We remain focused on delivering innovative
                        housing solutions and building lasting communities. Headquartered in
                        Edinburg, Texas, we are proud of our accomplishments and excited
                        about the future opportunities to serve our clients and residents.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default MissionPage;
