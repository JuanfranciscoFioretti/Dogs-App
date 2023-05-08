import React, { useState } from 'react'
import styles from './styles.css'

const ItemCount = () => {

    const [ count, setCount ] = useState(0);

    const addQuantity = () => {
        const addingQuantity = count + 1;
        setCount(addingQuantity);
        console.log(count)
    }

    const removeQuantity = () => {
        const removingQuantity = count - 1;
        count > 0 ? 
            (setCount(removingQuantity))
            :
            alert("Can´t take more products off the cart")
            // (setCount(0))
        console.log(count)
    }

    return (
        <div className='itemCountContainer'>
            <h3 className='titleItemCount'>This is the item count</h3>
            <div className='quantityButtonsContainer'>
                <button 
                    className='btn btn-primary'
                    onClick={addQuantity}>
                        {'Add 1 product'}
                </button>
                <button 
                    className='btn btn-secondary'
                    onClick={removeQuantity}>
                        {   count > 0 ?
                                'Remove 1 product'
                                :
                                '0 products added'
                        }
                </button>

            </div>
            <div className='itemCountDisplay'>
                <p className='countDisplay'>
                    {
                        count > 0 ?
                            ('Count: ', count)
                            :
                            ('You have 0 products :(')
                    }
                </p>
            </div>
        </div>
    )
}

export default ItemCount