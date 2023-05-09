import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.css';

function ItemCard({product}) {

    return (
        <Card className='itemCards' style={{ width: '16rem', height: '27rem' }}>
            <Card.Img className='cardsImg' variant="top" src={product.img} style={{height: '50%'}}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="outline-success" className="buyButton">Buy product</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;