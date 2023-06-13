import React from 'react';
import { Cart2 } from 'react-bootstrap-icons';
import styles from './styles.css';
// import React, { useContext } from 'react';
// import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    // const {CompanyName} = useContext(CartContext);
    // console.log('Cart Widget = ', CompanyName);
    return (
        <div>
            <Cart2 />
        </div>
    )
}

export default CartWidget;