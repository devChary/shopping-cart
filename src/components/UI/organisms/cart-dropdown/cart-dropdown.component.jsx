import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import CustomButton from '../../atoms/button/button.component';

import CartItem from '../../molecules/cart-item/cart-item.component';
import CartFooter from '../../molecules/cart-footer/cart-footer.component';
import CartHeader from '../../molecules/cart-header/cart-header.component.jsx';
import PriceInfo from '../../atoms/price-info/price-info.component.jsx';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

import './cart-dropdown.styles.scss'

const CartDropdown = ({ history }) => {

    const { cartItems, toggleHidden } = useContext(ShoppingCartContext);

    return (
        <div className='cart-dropdown'>
            <CartHeader />
            <div className='cart-items'>
                {/* {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )} */}
            </div>
            <PriceInfo />
            <CartFooter />
        </div>
    )
}

export default withRouter(CartDropdown);