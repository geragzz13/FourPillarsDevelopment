import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/Home.css';
import aboutImage from '../assets/images/aboutImage.jpg';
import heightsHilight from '../assets/videos/HeightsHilight.mp4';
import veronaHighlight from '../assets/videos/VeronaHighlights.mp4';
import HeightsThumbnail from '../assets/images/TheHeights1.png';
import VeronaThumbnail from '../assets/images/TheHeights8.png';

const Home = () => {
    const mainContentRef = useRef(null);

    useEffect(() => {
        if (mainContentRef.current) {
            const topPosition = mainContentRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = 150;
            window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
        }
    }, []);

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
        <div id="main-content" className="home-container" ref={mainContentRef}>
            
            {/* Introduction Section */}
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
                        As a renowned developer, we focus on crafting luxurious, multi-family properties with a vision for
                        sustainability and quality that not only enhance the community but stand as benchmarks in the real estate industry.
                    </p>
                </motion.div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={containerVariants}
            >
                <motion.div className="about-content" variants={itemVariants}>
                    <h2>About Us</h2>
                    <p>
                        At Four Pillars Development, we have over 20 years of experience in delivering high-quality residential 
                        and commercial developments. Our mission is to transform the urban landscape through innovation, efficiency, 
                        and craftsmanship, creating spaces that bring lasting value to the community.
                    </p>
                </motion.div>
                <motion.div className="about-image" variants={itemVariants}>
                    <img src={aboutImage} alt="About Four Pillars Development" />
                </motion.div>
            </motion.section>

            {/* Featured Projects */}
            <motion.section
                className="featured-projects"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <h2>Our Featured Projects</h2>
                <motion.div className="project-showcase" variants={containerVariants}>
                    <motion.div className="project-item" variants={itemVariants}>
                        <div className="video-wrapper">
                            <video controls className="project-video" poster={HeightsThumbnail}>
                                <source src={heightsHilight} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3>The Heights at Alamo</h3>
                        <p>A new fourplex community with spacious 2 & 3-bedroom units, perfect for generating steady rental income.</p>
                        <Link to="/property/4" className="btn view-all-button">View Details</Link>
                    </motion.div>
                    <motion.div className="project-item" variants={itemVariants}>
                        <div className="video-wrapper">
                            <video controls className="project-video" poster={VeronaThumbnail}>
                                <source src={veronaHighlight} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3>Verona Subdivision</h3>
                        <p>Verona Apartments is a gated subdivision centrally located with easy access to major highways, schools, and shopping centers.</p>
                        <Link to="/property/5" className="btn view-all-button">View Details</Link>
                    </motion.div>
                </motion.div>
                <Link to="/portfolio" className="btn view-all-button">View All Projects</Link>
            </motion.section>

            {/* Services Section */}
            <motion.section
                className="services-section section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="section-header">
                    <h2>Our Services</h2>
                </div>
                <motion.div className="section-content" variants={containerVariants}>
                    <motion.div className="service-item" variants={itemVariants}>
                        <h3>Land Development</h3>
                        <p>Transforming raw land into vibrant residential and commercial developments.</p>
                    </motion.div>
                    <motion.div className="service-item" variants={itemVariants}>
                        <h3>Construction Services</h3>
                        <p>From initial planning to final construction, we offer comprehensive construction services ensuring superior craftsmanship.</p>
                    </motion.div>
                    <motion.div className="service-item" variants={itemVariants}>
                        <h3>Project Management</h3>
                        <p>Our expert project management team oversees every phase of development, ensuring efficiency and quality.</p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                className="cta-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <h2>Ready to Start Your Project?</h2>
                <p>Partner with us to create exceptional properties that meet your unique vision and requirements.</p>
                <Link to="/contact" className="btn cta-button">Contact Us</Link>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                className="contact-section section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="section-header">
                    <h2>Contact Us</h2>
                </div>
                <motion.div className="section-content" variants={containerVariants}>
                    <p>For inquiries or project collaborations, please contact us at:</p>
                    <ul>
                        <li>Email: <a href="mailto:fourpillarsdevelopmentsales@gmail.com" style={{ color: '#193320', textDecoration: 'none' }}>fourpillarsdevelopmentsales@gmail.com</a></li>
                        <li>Phone: <a href="tel:+19567779579" style={{ color: '#193320', textDecoration: 'none' }}>+1 (956) 777-9579</a></li>
                        <li>Phone: <a href="tel:+19567779340" style={{ color: '#193320', textDecoration: 'none' }}>+1 (956) 777-9340</a></li>
                        <li>Address: 1509 Shavano Dr, Edinburg, Texas, 78504</li>
                    </ul>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Home;
