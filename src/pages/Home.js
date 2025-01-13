import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Home.css';
import aboutImage from '../assets/images/aboutImage.jpg'; // Your image path

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.8,
                ease: [0.42, 0, 0.58, 1],
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.4,
                ease: [0.42, 0, 0.58, 1],
            },
        },
    };

    return (
        <div className="home-container">
            {/* Introduction section */}
            <motion.section
                className="introduction-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={containerVariants}
            >
                <motion.div className="introduction-content" variants={itemVariants}>
                    <h2>Developer & Contractor of Award-Winning Multi-Family Properties</h2>
                    <p>
                        Four Pillars Development is a leading multi-family construction, development, and property management company headquartered in Edinburg. Since 2005, the Company has contracted and developed over $2.56 billion in residential developments throughout Texas and the Southeast, consisting of over 20,341 units throughout 125 developments.
                    </p>
                </motion.div>
                <motion.div className="image-container" variants={itemVariants}>
                    <img src={aboutImage} alt="About the Brownstone Group" />
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Home;
