import React, { useContext } from 'react';

import { CustomButton } from 'components/UI/atoms';
import { ShoppingCartContext } from 'providers/shopping-cart/shoppingCart.providers';

import './cart-header.styles.scss'

const CartHeader = () => {

    const buttonStyles = {
        fontSize: '2rem',
        backgroundColor: 'transparent'
    }

    const { cartItemsCount, toggleHidden } = useContext(ShoppingCartContext);
    const screenWidth = window.screen.width;
    const cartClass = screenWidth <= 1024 ? 'small' : 'large';

    return (
        <header className={`cart-header ${cartClass}`}>
            <div tabIndex="0" aria-label={`My cart has ${cartItemsCount} items`} className="cart-header__wrapper">
                <h3>My Cart</h3>
                <span aria-live="polite"> {cartItemsCount > 0 ? `( ${cartItemsCount}  item)` : ''}</span>
            </div>

            {screenWidth > 1024 && <CustomButton style={buttonStyles} aria-label="Close Popup" onClick={toggleHidden}>X</CustomButton>}
        </header>
    )
}

export default CartHeader;