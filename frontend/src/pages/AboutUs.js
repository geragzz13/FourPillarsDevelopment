import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/styles/AboutUs.css'; // Import your custom CSS for AboutUs page

const AboutUs = () => {
    // Dummy data for team members (replace with actual data)
    const teamMembers = [
        { id: 1, name: 'Emmanuel Perez', imgSrc: '/team-member-1.jpg', description: 'CEO' },
        { id: 2, name: 'Emiliano Perez', imgSrc: '/team-member-2.jpg', description: 'CEO' },
        { id: 3, name: 'Third Pillar lol', imgSrc: '/team-member-3.jpg', description: 'CEO' },
        { id: 4, name: 'Fourth Pillar lol', imgSrc: '/team-member-1.jpg', description: 'CEO' }
        // Add more team members as needed
    ];

    return (
        <div className="about-us-container">
            <Container>
                {/* Title */}
                <p className="title">Meet our team</p>

                {/* Paragraph section aligned to the right */}
                <Row>
                    <Col md={6}>
                        <p>
                        </p>
                    </Col>
                </Row>

                {/* Team Member Cards */}
                <Row className="mt-4">
                    {teamMembers.map(member => (
                        <Col key={member.id} xs={12} md={6} lg={3} className="mb-4">
                            <Card className="team-member-card">
                                <Card.Img variant="top" src={member.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Text>{member.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
