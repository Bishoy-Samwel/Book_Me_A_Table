import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


export default function Restaurant({img, desc, title, id}) {

    return (
        <Link to={`/details/${id}`}> 
        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {desc}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Link>
    );
} 
