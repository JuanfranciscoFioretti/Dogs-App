import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
import ItemCount from './components/ItemCount/ItemCount';
import styles from './styles.css';
import ItemCard from './components/ItemCard/ItemCard';

const App = () => {
    return (
        <div className='appContainer'>
            <NavBar/>
            <ItemList/>
            <ItemCount/>
            <ItemCard/>
        </div>
    )
}

export default App;