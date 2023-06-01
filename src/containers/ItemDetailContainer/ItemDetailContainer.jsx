import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import styles from './styles.css';
import { getProducts } from '../../utils/Products';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const ItemDetailContainer = () => {

    const [ loader, setLoader ] = useState(true);

    const [ product, setProduct ] = useState(true);

    const { id } = useParams();

    useEffect(() => {

        id ?

        getProducts()
        .then(response => {
            setProduct(response.filter(products => products.id === id));
        })
        .catch(error => console.log("Error:", error))
        .finally(() => setLoader(false))

        :

        setProduct(product);
        setLoader(false);
    }, [id])

    console.log("products: ", product)
    return (
        <div>
            {
                id && loader === false ? 
                    <ItemDetail loader={loader} product={product} id={id}/>
                :
                    <Loader/>
            }
        </div>
    )
}

export default ItemDetailContainer;