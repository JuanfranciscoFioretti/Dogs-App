import React from 'react';
import { useCartContext } from '../../Context/CartContext';
// import NavBar from '../NavBar/NavBar'
// import Container from 'react-bootstrap/esm/Container';

const ItemCart = () => {

    const { showCart, product } = useCartContext();

    // const showMeTheCart = () => {
    //     console.log('show me the cart: ', cart);
    // }

    return (
    <div>
        <h1>This is the Item Cart</h1>
        <p className='pItemCart'>Title: {product.title}</p>
        <p className='pItemCart'>Price: {product.price}</p>
        <p className='pItemCart'>Quantity: {product.quantity}</p>
        {/* <p className='pItemCart'>Title: {product.title}</p> */}

        <button className='btn btn-success' onClick={showCart}>Show Me The Cart</button>
    </div>
    )
}

export default ItemCart;