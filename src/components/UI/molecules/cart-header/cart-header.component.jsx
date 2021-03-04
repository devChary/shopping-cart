import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

import './cart-header.styles.scss'

const CartHeader = () => {

    const { cartItemsCount } = useContext(ShoppingCartContext);

    return (
        <header className="cart-header">
            <h3>My Cart</h3>
            <span> ({cartItemsCount} item)</span>
        </header>
    )
}

export default CartHeader;