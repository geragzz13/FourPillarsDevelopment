import React from 'react';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="about-section">
        <div className="section-header">
          <h2>About Us</h2>
        </div>
        <div className="section-content">
          <p>
            Four Pillars Development is a leading land developer specializing in residential and commercial projects. With over two decades of experience, we are committed to delivering exceptional quality and innovative design in every project we undertake.
          </p>
          <p>
            Our mission is to create sustainable communities that enhance quality of life while respecting the environment. We prioritize integrity, transparency, and customer satisfaction in all our endeavors.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <h2>Our Services</h2>
        </div>
        <div className="section-content">
          <div className="service-item">
            <h3>Land Development</h3>
            <p>We specialize in transforming raw land into vibrant residential and commercial developments, tailored to meet the needs of modern communities.</p>
          </div>
          <div className="service-item">
            <h3>Construction Services</h3>
            <p>From initial planning to final construction, we offer comprehensive construction services ensuring superior craftsmanship and timely delivery.</p>
          </div>
          <div className="service-item">
            <h3>Project Management</h3>
            <p>Our expert project management team oversees every phase of development, ensuring efficiency, cost-effectiveness, and adherence to deadlines.</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <h2>Recent Projects</h2>
        </div>
        <div className="section-content">
          <div className="project-item">
            <h3>Greenwood Estates</h3>
            <p>A prestigious residential community featuring modern homes and extensive green spaces, designed for sustainable living.</p>
          </div>
          <div className="project-item">
            <h3>City Center Plaza</h3>
            <p>An iconic commercial development offering state-of-the-art office spaces, retail outlets, and recreational facilities in the heart of the city.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-header">
          <h2>Contact Us</h2>
        </div>
        <div className="section-content">
          <p>For inquiries or project collaborations, please contact us at:</p>
          <ul>
            <li>Email: info@fourpillarsdev.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 456 Oak Street, Cityville, State, Zip Code</li>
          </ul>
        </div>
      </section>
      <section className="contact-section">
        <div className="section-header">
          <h2>Contact Us</h2>
        </div>
        <div className="section-content">
          <p>For inquiries or project collaborations, please contact us at:</p>
          <ul>
            <li>Email: info@fourpillarsdev.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 456 Oak Street, Cityville, State, Zip Code</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
