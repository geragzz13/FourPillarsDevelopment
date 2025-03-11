import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'; 
import '../assets/styles/BidOurWork.css'; 
const BidOurWork = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    discipline: '',
    area: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data via EmailJS
    emailjs.sendForm(
      'your_service_id', // Replace with EmailJS service ID
      'your_template_id', // Replace with EmailJS template ID
      e.target,
      'your_user_id' // Replace with EmailJS user ID (API key)
    )
    .then((result) => {
      console.log('EmailJS Success:', result.text);
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        companyName: '',
        discipline: '',
        area: '',
        message: ''
      });
    }, (error) => {
      console.error('EmailJS Error:', error.text);
      alert('Error sending message. Please try again later.');
    });
  };

  return (
    <div className="bid-our-work-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h1>BID OUR WORK</h1>
            <p>USE THIS FORM TO SUBMIT YOUR BID</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactFormName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormDiscipline">
                <Form.Label>Discipline</Form.Label>
                <Form.Control
                  type="text"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormArea">
                <Form.Label>Area (City and/or State)</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
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
                Submit Bid
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BidOurWork;
