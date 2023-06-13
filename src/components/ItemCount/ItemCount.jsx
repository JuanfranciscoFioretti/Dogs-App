import React, { useState } from 'react'
import styles from './styles.css'

const ItemCount = ({ onAdd, clearCart, isInCart, removeProduct }) => {

    // const [ count, setCount ] = useState(1);

    // const addQuantity = () => {
    //     const addingQuantity = count + 1;
    //     setCount(addingQuantity);
    //     console.log(count)
    // }

    // const removeQuantity = () => {
    //     const removingQuantity = count - 1;
    //     count > 0 ? 
    //         (setCount(removingQuantity))
    //         :
    //         alert("Can´t take more products off the cart")
    //         // (setCount(0))
    //     console.log(count)
    // }

    return (
        <div className='itemCountContainer'>
            <h3 className='titleItemCount'>This is the item count</h3>
            <div className='quantityButtonsContainer'>
                <button 
                    className='btn btn-primary'
                    onClick={onAdd}>
                        {'Add 1 product'}
                </button>
                <button 
                    className='btn btn-secondary'
                    onClick={removeProduct}>
                        {'Remove 1 product'}
                </button>
                <button 
                    className='btn btn-secondary'
                    onClick={clearCart}>
                        {'Clear Cart'}
                </button>
            </div>
            <div className='itemCountDisplay'>
                <p className='countDisplay'>
                    {/* {
                        count > 0 ?
                            ('Count: ', count)
                            :
                            ('You have 0 products :(')
                    } */}
                </p>
            </div>
        </div>
    )
}

export default ItemCount;