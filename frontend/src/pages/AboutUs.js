import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/styles/AboutUs.css'; // Import your custom CSS for AboutUs page

const AboutUs = () => {
    // Dummy data for team members (replace with actual data)
    const teamMembers = [
        { id: 1, name: 'Emmanuel Perez', imgSrc: '/team-member-1.jpg', description: 'CEO' },
        { id: 2, name: 'Emiliano Perez', imgSrc: '/team-member-2.jpg', description: 'COO' },
        { id: 3, name: 'Mike Johnson', imgSrc: '/team-member-3.jpg', description: 'Marketing Director' },
        { id: 4, name: 'John Doe', imgSrc: '/team-member-1.jpg', description: 'CEO' },
        { id: 5, name: 'Gerardo Gonzalez', imgSrc: '/team-member-2.jpg', description: 'COO' },
        { id: 6, name: 'Jane Smith', imgSrc: '/team-member-3.jpg', description: 'Marketing Director' },
        // Add more team members as needed
    ];

    return (
        <div className="about-us-container">
            <Container>
                {/* Paragraph section aligned to the right */}
                <Row>
                    <Col md={6}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla condimentum tortor sed sapien lacinia, id vehicula
                            ipsum condimentum.
                        </p>
                    </Col>
                </Row>

                {/* Team Member Cards */}
                <Row className="mt-4">
                    {teamMembers.map(member => (
                        <Col key={member.id} md={4} className="mb-4">
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
