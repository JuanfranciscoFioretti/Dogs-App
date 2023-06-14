import React from 'react';
import { useCartContext } from '../../Context/CartContext';
// import NavBar from '../NavBar/NavBar'
// import Container from 'react-bootstrap/esm/Container';

const ItemCart = () => {

    const { showCart } = useCartContext();

    // const showMeTheCart = () => {
    //     console.log('show me the cart: ', cart);
    // }

    return (
    <div>
        <h1>This is the Item Cart</h1>
        <button className='btn btn-success' onClick={showCart}>Show Me The Cart</button>
    </div>
    )
}

export default ItemCart;