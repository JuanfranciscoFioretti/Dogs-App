import React from 'react'
import styles from './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemCard from '../ItemCard/ItemCard';

const ItemDetail = ({loader, product}) => {
    // const { name, price, stock, description, img } = product;
    return (
        <div className='row'>
            <div className='col'>
                <h2>item detail papi</h2>
                {
                    product && loader == false ? 
                        <>
                            <h3>{product?.name}</h3>
                            <h3>{product?.price}</h3>
                            <h3>{product?.stock}</h3>
                            <h2>{product?.description}</h2>
                            <img src={product?.img}></img>
                            <ItemCount/>

                            {/* <ItemCard product={product}/> */}

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