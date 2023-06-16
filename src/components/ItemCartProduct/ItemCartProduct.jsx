import React from 'react';

const ItemCartProduct = ({product}) => {
    return (
        <div>
            <h1>This is the Item Cart</h1>
            <p className='pItemCart'>Title: {product.name}</p>
            <p className='pItemCart'>Price: {product.price}</p>
            <p className='pItemCart'>Quantity: {product.quantity}</p>
            <img src={product?.img} alt="" height={130}/>
            {/* <p className='pItemCart'>Title: {product.title}</p> */}
                
            {/* <button className='btn btn-success' onClick={showCart}>Show Me The Cart</button> */}
        </div>
    )
}

export default ItemCartProduct;