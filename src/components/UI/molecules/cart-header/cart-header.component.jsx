import React from 'react';

import './cart-header.styles.scss'

const CartHeader = () => {
    return (
        <header className="cart-header">
            <h3>My Cart</h3>
            <span> (1 item)</span>
        </header>
    )
}

export default CartHeader;