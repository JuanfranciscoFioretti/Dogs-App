import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

const App = () => {
    return (
        <BrowserRouter>
            <div className='appContainer'>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/categorie/:categorieId' element={<ItemListContainer/>} />
                    <Route path='/product/:id' element={<ItemDetailContainer/>} />
                    <Route path='/product/:id' element={<ItemDetail/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;