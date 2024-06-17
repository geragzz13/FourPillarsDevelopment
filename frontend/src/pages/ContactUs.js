// src/pages/ContactUs.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../assets/styles/ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '', // New field for phone number
    propertyInterest: '', // New field for property interest
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to backend
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Form Submission Successful:', res);
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        propertyInterest: '',
        message: ''
      });
    } catch (err) {
      console.error('Form Submission Error:', err);
      // Handle or show error message
    }
  };

  return (
    <div className="contact-us-container">
      <Container className="full-width-form">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>Contact Us</h1>
            <p>Fill out the form below to get in touch with us</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormPropertyInterest">
                <Form.Label>Property or Subdivision of interest?</Form.Label>
                <Form.Control
                  type="text"
                  name="propertyInterest"
                  value={formData.propertyInterest}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
