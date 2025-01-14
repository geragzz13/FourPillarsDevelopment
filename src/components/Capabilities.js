import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faBuilding, faTools, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Capabilities.css';

const Capabilities = () => {
    return (
        <section className="capabilities-section">
            {/* Added Title Section */}
            <h2 className="capabilities-title">Capabilities</h2>

            <div className="capabilities-container">
                {/* Construction Capability */}
                <div className="capability-item">
                    <div className="capability-icon-circle">
                        <FontAwesomeIcon icon={faHardHat} className="capability-icon" />
                    </div>
                    <h3>Construction</h3>
                    <p>We operate as the General Contractor for both in-house and third-party projects.</p>
                </div>

                {/* Development Capability */}
                <div className="capability-item">
                    <div className="capability-icon-circle">
                        <FontAwesomeIcon icon={faBuilding} className="capability-icon" />
                    </div>
                    <h3>Development</h3>
                    <p>We specialize in residential and commercial property development.</p>
                </div>

                {/* Management Capability */}
                <div className="capability-item">
                    <div className="capability-icon-circle">
                        <FontAwesomeIcon icon={faTools} className="capability-icon" />
                    </div>
                    <h3>Management</h3>
                    <p>We bring the right people together for unique solutions.</p>
                </div>

                {/* Design Capability */}
                <div className="capability-item">
                    <div className="capability-icon-circle">
                        <FontAwesomeIcon icon={faPencilRuler} className="capability-icon" />
                    </div>
                    <h3>Design</h3>
                    <p>We offer professional design solutions tailored for success.</p>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
