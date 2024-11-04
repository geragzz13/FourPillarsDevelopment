import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/Home.css';
import aboutImage from '../assets/images/aboutImage.jpg';
import heightsHilight from '../assets/videos/HeightsHilight.mp4';
import veronaHighlight from '../assets/videos/VeronaHighlights.mp4';
import HeightsThumbnail from '../assets/images/TheHeights1.png';
import VeronaThumbnail from '../assets/images/TheHeights8.png';

const Home = () => {
    const [modalContent, setModalContent] = useState({ title: '', description: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const mainContentRef = useRef(null);

    useEffect(() => {
        if (mainContentRef.current) {
            const topPosition = mainContentRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = 150;
            window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
        }
    }, []);

    const openModal = (title, description) => {
        setModalContent({ title, description });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2.5,
                ease: [0.4, 0.0, 0.2, 1],
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: [0.4, 0.0, 0.2, 1],
            },
        },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5, // Faster duration for the modal
                ease: 'easeOut',
            },
        },
    };

    return (
        <div id="main-content" className="home-container" ref={mainContentRef}>
            {/* About Section */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={containerVariants}
            >
                <motion.div className="about-content" variants={itemVariants}>
                    <h2>WELCOME TO FOUR PILLARS DEVELOPMENT</h2>
                    <p>
                        At Four Pillars Development, we believe that innovation and craftsmanship come together to redefine the landscape of real estate in Edinburg, Texas. As a family-owned and operated business with over 20 years of experience, we prioritize efficient builds that not only meet the needs of our community but also stand the test of time. Our commitment to quality and integrity reflects our Texan roots, driving us to create exceptional residential and commercial developments that enhance the vibrant fabric of our city.
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
                        <p>Verona Apartments is a gated subdivision centrally located with easy access to McAllen & Brownsville, major highways, schools, & shopping centers.</p>
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
                    <motion.div className="service-item" variants={itemVariants} onClick={() => openModal("Land Development", "We specialize in transforming raw land into vibrant residential and commercial developments.")}>
                        <h3>Land Development</h3>
                        <p>Transforming raw land into vibrant residential and commercial developments.</p>
                    </motion.div>
                    <motion.div className="service-item" variants={itemVariants} onClick={() => openModal("Construction Services", "From initial planning to final construction, we offer comprehensive construction services ensuring superior craftsmanship.")}>
                        <h3>Construction Services</h3>
                        <p>Comprehensive construction services ensuring superior craftsmanship.</p>
                    </motion.div>
                    <motion.div className="service-item" variants={itemVariants} onClick={() => openModal("Project Management", "Our expert project management team oversees every phase of development, ensuring efficiency.")}>
                        <h3>Project Management</h3>
                        <p>Expert project management for efficient and cost-effective development.</p>
                    </motion.div>
                </motion.div>
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

            {/* Modal for Service Information */}
            {isModalOpen && (
                <motion.div
                    className="modal-overlay"
                    initial="hidden"
                    animate="visible"
                    variants={modalVariants}
                    onClick={closeModal}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial="hidden"
                        animate="visible"
                        variants={modalVariants}
                    >
                        <h3>{modalContent.title}</h3>
                        <p>{modalContent.description}</p>
                        <button className="btn" onClick={closeModal}>Close</button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Home;
