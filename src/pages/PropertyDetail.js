/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap'; // Import necessary Bootstrap components
import '../assets/styles/PropertyDetail.css'; // Import your custom CSS for PropertyDetail page
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png'; // Corrected path

const PropertyDetail = () => {
    const { id } = useParams(); // Get the property ID from the URL params

    // Dummy data for multiple properties (replace with actual data)
    const properties = [
        {
            id: 1,
            name: 'Sugar Mill Estate',
            imgSrc: SugarMillEstateImage,
            location: 'Edinburg, TX',
            description: 'Detailed description of Sugar Mill Estate.',
            contacts: [
                { name: 'Emmanuel Perez', role: 'Manager', email: 'john.doe@example.com' },
                { name: 'Emiliano Perez', role: 'Manager', email: 'jane.smith@example.com' }
            ]
        },
        {
            id: 2,
            name: 'Dawson Estates',
            imgSrc: SugarMillEstateImage,
            location: 'Edinburg, TX',
            description: 'Detailed description of Dawson Estates.',
            contacts: [
                { name: 'Emmanuel Perez', role: 'Manager', email: 'john.doe@example.com' },
                { name: 'Emiliano Perez', role: 'Manager', email: 'jane.smith@example.com' }
            ]
        }
    ];

    // Find the property based on the id from URL
    const property = properties.find(prop => prop.id === parseInt(id));

    // Render a message if the property is not found
    if (!property) {
        return <p>Property not found</p>;
    }

    return (
        <div className="property-detail-container">
            <Container>
                <Card className="property-detail-card">
                    <Card.Img variant="top" src={property.imgSrc} />
                    <Card.Body>
                        <Card.Title>{property.name}</Card.Title>
                        <Card.Text>{property.location}</Card.Text>
                        <Card.Text>{property.description}</Card.Text>
                        <h5>Contacts:</h5>
                        {property.contacts.map((contact, index) => (
                            <p key={index}>{contact.name} - {contact.role} - {contact.email}</p>
                        ))}
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default PropertyDetail;
