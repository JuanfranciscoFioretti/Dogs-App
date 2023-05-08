import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.css';

function ItemCard() {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='https://img.freepik.com/fotos-premium/diseno-paquetes-bolsas-comida-perros-sobre-fondo-blanco-representacion-3d_476612-10555.jpg?w=2000' />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button className="btn btn-success">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;