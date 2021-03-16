import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import { CartHeader, CartItem } from 'components/UI/molecules';
import { EmptyCartMessage } from 'components/UI/atoms';
import { EmptyCartFooterOverview } from 'components/UI/organisms';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {

    const { cartItems, toggleHidden } = useContext(ShoppingCartContext);

    return (
        <div className='cart-dropdown'>
            <CartHeader />
            <div className='cart-items'>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <EmptyCartMessage />
                    )
                }
            </div>
            <EmptyCartFooterOverview cartItems={cartItems} />
        </div>
    )
}

export default withRouter(CartDropdown);