import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';
import Capabilities from '../components/Capabilities';
import aboutImage from '../assets/images/aboutImage.jpg';

const Home = () => {
    const [modalContent, setModalContent] = useState({ title: '', description: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fadeInElements = () => {
            const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
            let delay = 0; // Initialize a delay variable

            elements.forEach((element) => {
                setTimeout(() => {
                    if (isElementInViewport(element)) {
                        element.classList.add('active'); // Add active class when in view
                    } else {
                        element.classList.remove('active'); // Remove active class when out of view
                    }
                }, delay);
                delay += 100; // Increase delay for each element
            });
        };

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top < (window.innerHeight || document.documentElement.clientHeight) && // Element is visible
                rect.bottom >= 0 // Bottom is also visible
            );
        };

        // Attach event listeners for scroll and resize
        window.addEventListener('scroll', fadeInElements);
        window.addEventListener('resize', fadeInElements);
        fadeInElements(); // Initial check to activate any elements already in view

        return () => {
            // Cleanup event listeners on component unmount
            window.removeEventListener('scroll', fadeInElements);
            window.removeEventListener('resize', fadeInElements);
        };
    }, []);

    const openModal = (title, description) => {
        setModalContent({ title, description });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="home-container">
            {/* About Section */}
            <section className="about-section fade-in">
                <div className="about-content">
                    <h2>ABOUT FOUR PILLARS DEVELOPMENT</h2>
                    <p>
                        At Four Pillars Development, we believe that innovation and craftsmanship come together to redefine the landscape of real estate in Edinburg, Texas. As a family-owned and operated business with over 20 years of experience, we prioritize efficient builds that not only meet the needs of our community but also stand the test of time. Our commitment to quality and integrity reflects our Texan roots, driving us to create exceptional residential and commercial developments that enhance the vibrant fabric of our city. Through a harmonious blend of modern design and sustainable practices, we aim to cultivate spaces where families can thrive and businesses can flourish, making Edinburg a better place to live and work.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="About Harwood International" />
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section fade-in-left">
                <div className="section-header">
                    <h2>Our Services</h2>
                </div>
                <div className="section-content">
                    <div className="service-item fade-in" onClick={() => openModal("Land Development", "We specialize in transforming raw land into vibrant residential and commercial developments, tailored to meet the needs of modern communities.")}>
                        <h3>Land Development</h3>
                        <p>We specialize in transforming raw land into vibrant residential and commercial developments, tailored to meet the needs of modern communities.</p>
                    </div>
                    <div className="service-item fade-in" onClick={() => openModal("Construction Services", "From initial planning to final construction, we offer comprehensive construction services ensuring superior craftsmanship and timely delivery.")}>
                        <h3>Construction Services</h3>
                        <p>From initial planning to final construction, we offer comprehensive construction services ensuring superior craftsmanship and timely delivery.</p>
                    </div>
                    <div className="service-item fade-in" onClick={() => openModal("Project Management", "Our expert project management team oversees every phase of development, ensuring efficiency, cost-effectiveness, and adherence to deadlines.")}>
                        <h3>Project Management</h3>
                        <p>Our expert project management team oversees every phase of development, ensuring efficiency, cost-effectiveness, and adherence to deadlines.</p>
                    </div>
                </div>
            </section>

            {/* Modal for Service Information */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{modalContent.title}</h3>
                        <p>{modalContent.description}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

            {/* Projects Section */}
            <section className="projects-section section fade-in-right">
                <div className="section-header">
                    <h2>Recent Projects</h2>
                </div>
                <div className="section-content">
                    <div className="project-item fade-in">
                        <Link to="/property/1" className="custom-link">
                            <h3>Sugar Mills Estate</h3>
                            <p>A prestigious residential community featuring modern homes and extensive green spaces, designed for sustainable living.</p>
                        </Link>
                    </div>
                    <div className="project-item fade-in">
                        <Link to="/property/2" className="custom-link">
                            <h3>Dawson Estates</h3>
                            <p>An iconic commercial development offering state-of-the-art townhouses, apartments, and is close to many facilities in the heart of the city.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            {/*  <Capabilities /> */}

            {/* Contact Section */}
            <section className="contact-section section fade-in-left">
                <div className="section-header">
                    <h2>Contact Us</h2>
                </div>
                <div className="section-content">
                    <p>For inquiries or project collaborations, please contact us at:</p>
                    <ul>
                        <li>Email: <a href="mailto:fourpillarsdevelopmentsales@gmail.com" style={{ color: '#193320', textDecoration: 'none' }}>fourpillarsdevelopmentsales@gmail.com</a></li>
                        <li>: <a href="tel:+19567779579" style={{ color: '#193320', textDecoration: 'none' }}>+1 (956) 777-9579</a></li>
                        <li>: <a href="tel:+19567779340" style={{ color: '#193320', textDecoration: 'none' }}>+1 (956) 777-9340</a></li>
                        <li>Address: 1509 Shavano Dr, Edinburg, Texas, 78504</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
