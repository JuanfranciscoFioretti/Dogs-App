import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import Loader from '../Loader/Loader';
// import { useParams } from 'react-router-dom';
// import  {getProducts}  from '../../utils/Products'

const ItemList = ({ loader, products}) => {

    // const [ loader, setLoader ] = useState(true);

    // const [ products, setProducts ] = useState(true);

    // const { categorieId } = useParams();

    // useEffect(() => {

    //     categorieId ? 
    //         getProducts()
    //         .then(response => {
    //             setProducts(response.filter(product => product.categorie === categorieId));
    //         })
    //         .catch(error => console.error(error))
    //         .finally(() => setLoader(false))

    //         :

    //         getProducts()
    //         .then(response => {
    //             setProducts(response);
    //         })
    //         .catch(error => console.error(error))
    //         .finally(() => setLoader(false));
    // }, [categorieId])

    return (

        <div id='divContainerMappingProducts'>
            {
                loader ? 

                    <Loader/>
                    :
                    products.map((product) => 
                        <ItemCard key={product.id} product={product}/>
                    )
            }
        </div>
    )
}

export default ItemList;