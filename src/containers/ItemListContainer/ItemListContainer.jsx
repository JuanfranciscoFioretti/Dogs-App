import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import styles from './styles.css';
import { getProducts }  from '../../utils/Products';
import { useParams } from 'react-router-dom';
// import { response } from 'express';
// import Loader from '../Loader/Loader';

const ItemListContainer = () => {

    const [ loader, setLoader ] = useState(true);

    const [ products, setProducts ] = useState(true);

    const { categorieId } = useParams();

    useEffect(() => {
        categorieId ?
            getProducts()
            .then(response => {
                setProducts(response.filter(products => products.categorie === categorieId));
            })
            .catch(error => console.error(error))
            .finally(() => setLoader(false))
        :
            getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => console.log(error))
            .finally(() => setLoader(false));
    }, [categorieId])

    return (
        <div id='divDisplayItemsList'>
            <ItemList loader={loader} products={products}/>
        </div>
    )
}

export default ItemListContainer;