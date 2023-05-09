import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './styles.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div className='appContainer'>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/categorie/:categorieId' element={<ItemListContainer/>} />
                    <Route path='/categorie/:detailId' element={<ItemDetailContainer/>} />
                </Routes>
            </div>

            <ItemCount/>
        </BrowserRouter>
    )
}

export default App;