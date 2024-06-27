// Capabilities.js

import React from 'react';
import '../assets/styles/Capabilities.css';
import constructionIcon from '../assets/images/constructionIcon.png';
import managementIcon from '../assets/images/managementIcon.png';

const Capabilities = () => {
    return (
        <section className="capabilities-section">
            <div className="container">
                <div className="capabilities-content">
                    <div className="capability">
                        <img src={constructionIcon} alt="Construction Icon" className="capability-icon" />
                        <h3>Construction</h3>
                        <p>We operate as the General Contractor for both in-house and third party projects.</p>
                    </div>
                    <div className="capability">
                        <img src={managementIcon} alt="Management Icon" className="capability-icon" />
                        <h3>Management</h3>
                        <p>We bring the right people together to provide a unique turn-key solution for our clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
