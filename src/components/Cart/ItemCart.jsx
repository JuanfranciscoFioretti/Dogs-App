import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import ItemCartProduct from '../ItemCartProduct/ItemCartProduct';
// import NavBar from '../NavBar/NavBar'
// import Container from 'react-bootstrap/esm/Container';

const ItemCart = () => {

    const { showCart, product, cart, clearCart } = useCartContext();

    // const showMeTheCart = () => {
    //     console.log('show me the cart: ', cart);
    // }

    return (
        <>
            {   cart === 0 ? <h2>No products in cart</h2> :
                (cart.map(product => 
                    <ItemCartProduct product={product} key={product.id}/>
                    // (
                    // <div key={product.id}>
                    //     <h1>This is the Item Cart</h1>
                    //     <p className='pItemCart'>Title: {product.name}</p>
                    //     <p className='pItemCart'>Price: {product.price}</p>
                    //     <p className='pItemCart'>Quantity: {product.quantity}</p>
                    //     {/* <p className='pItemCart'>Title: {product.title}</p> */}
                
                    //     <button className='btn btn-success' onClick={showCart}>Show Me The Cart</button>
                    // </div>
                    // )
                ))
            }
            <button className='btn btn-success' onClick={showCart}>Show Me The Cart</button>
            <button className='btn btn-success' onClick={clearCart}>Clear Cart</button>
        </>
    
    )
}

export default ItemCart;