import React, { createContext, useState, useEffect } from 'react';
import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount,
    getCartTotal
} from './shoppingCart.utils';

export const ShoppingCartContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0,
    cartTotal: 0
});

const ShoppingCartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = item => {
        setCartItems(addItemToCart(cartItems, item))
    };
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);
    const clearItemFromCart = item =>
        setCartItems(filterItemFromCart(cartItems, item));

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    }, [cartItems]);

    return (
        <ShoppingCartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                clearItemFromCart,
                cartItemsCount,
                cartTotal
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;