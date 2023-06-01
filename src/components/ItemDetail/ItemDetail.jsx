import React from 'react'
import styles from './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemCard from '../ItemCard/ItemCard';

const ItemDetail = ({loader, product, id}) => {
    // const { name, price, stock, description } = product;
    // console.log("product: ", product);
    return (
        <div className='row'>
            <div className='col'>
                <h2>item detail papi</h2>
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <h3>{product.stock}</h3>
                <h2>{product.description}</h2>
                <ItemCount/>

                <ItemCard product={product}/>

                <Link to='/'>
                    <button className='btn btn-success'>Go Back</button>
                </Link>
            </div>
            
            {/* {
                id && (loader === false) ? 
                    <ItemCard product={product}/>
                :
                    <Loader/>
            } */}



            {/* <div className='col'>
                <Card className='itemCards' style={{ width: '24rem', height: '36rem' }}>
                <Card.Img className='cardsImg' variant="top" src={product.img} style={{height: '50%'}}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="outline-success" className="buyButton">Buy product</Button>
                </Card.Body>
                </Card>
            </div> */}
        </div>
    )
}

export default ItemDetail