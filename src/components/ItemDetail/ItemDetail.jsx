import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import ItemCard from '../ItemCard/ItemCard';
import Loader from '../Loader/Loader';
import styles from './styles.css';

const ItemDetail = ({loader, product}) => {
    // const { name, price, stock, description, img } = product;
    const [ goToCart, setGoToCart ] = useState(false);

    const { addProduct, clearCart, isInCart, removeProduct, } = useCartContext();

    const onAdd = (quantity) => {
        addProduct(product, quantity);
    } 
    return (
        <div className='row'>
            <div className='col'>
                <h2>item detail papi</h2>
                {
                    product && !loader ? 
                        <>
                            <h3>{product?.name}</h3>
                            <h3>{product?.price}</h3>
                            <h3>{product?.stock}</h3>
                            <h2>{product?.description}</h2>
                            <img src={product?.img}></img>

                            {
                                goToCart ? 
                                    <Link to='/cart'>Finish your purchase</Link>
                                    :
                                    <ItemCount onAdd={onAdd} clearCart={clearCart} isInCart={isInCart} removeProduct={removeProduct} goToCart={goToCart} />
                            }

                            <Link to='/cart'>
                                <button className='btn btn-success'>Go to cart</button>
                            </Link>

                            <Link to='/'>
                                <button className='btn btn-success'>Go Back</button>
                            </Link>
                        </>
                        :
                        <Loader/>
                }
            </div>
        </div>
    )
}

export default ItemDetail;