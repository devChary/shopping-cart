import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import CartItem from '../../molecules/cart-item/cart-item.component';
import CartHeader from '../../molecules/cart-header/cart-header.component.jsx';
import EmptyCartMessage from '../../atoms/empty-message/empty-message.component';
import EmptyCartFooterOverview from '../../templates/empty-cart-footer-overview/footer-overview.component';

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