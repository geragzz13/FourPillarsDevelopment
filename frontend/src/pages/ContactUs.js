// src/pages/ContactUs.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Bootstrap } from 'react-bootstrap';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    //send form data to backend
    axios.post('http://localhost:5000/api/contact', formData)
    .then(res => {
      console.log('Form Submission Succesful:', res);
      //maybe clear form here or show success msg
    })
    .catch(err => {
      console.error('Form Submission Error:', err);
      //Handle or show error msg
    });
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={8}>
          <h1>Contact Us</h1>
          <p>Fill out the form below to get in touch with us.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId='contactForm'>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} value={formData.message} onChange={handleChange} required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;