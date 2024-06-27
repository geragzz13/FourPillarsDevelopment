import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // Import EmailJS library
import '../assets/styles/ContactUs.css'; // Import the CSS file

/* const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID; // Get EmailJS user ID from environment variables
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Get EmailJS template ID from environment variables */
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    propertyInterest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Send form data via EmailJS
    emailjs.sendForm(
      'outlooktest_service', // Replace with your EmailJS service ID
      'template_b7q1m9a', // Replace with your EmailJS template ID
      e.target,
      'qsS7UuJAhUcQ48mov' // Replace with your EmailJS user ID (API key)
    )
    .then((result) => {
      console.log('EmailJS Success:', result.text);
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        propertyInterest: '',
        message: ''
      });
    }, (error) => {
      console.error('EmailJS Error:', error.text);
      // Handle or show error message
    });
  };

  return (
    <div className="contact-us-container">
      <Container className="full-width-form">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
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
