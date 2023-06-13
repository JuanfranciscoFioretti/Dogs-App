import React, { useContext, useState} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);
    
    const clearCart = () => { setCart([]) };

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (product, quantity) => {
        isInCart(product.id) ?
            setCart(cart.map(product => {
                return product.id === product.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
            : 
            setCart([...cart, { ...product, quantity}]);
    }

    return (
        <CartContext.Provider value={{ 
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;