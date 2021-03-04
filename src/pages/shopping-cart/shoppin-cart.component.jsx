import React, { useContext } from 'react';

import CartHeader from '../../components/UI/molecules/cart-header/cart-header.component';
import CartItem from '../../components/UI/molecules/cart-item/cart-item.component';
import EmptyCartMessage from '../../components/UI/atoms/empty-message/empty-message.component';
import EmptyCartFooterOverview from '../../components/UI/templates/empty-cart-footer-overview/footer-overview.component';

import { ShoppingCartContext } from '../../providers/shopping-cart/shoppingCart.providers';

import './shopping-cart.styles.scss';

const ShoppingCartPage = () => {
    const { cartItems } = useContext(ShoppingCartContext);

    const bgColor = {
        white: { backgroundColor: '#fff' },
        lightGrey: { backgroundColor: '#f4f2f2' },
    }

    return (
        <div className="cart-page" style={cartItems.length ? bgColor.lightGrey : bgColor.white}>
            {
                cartItems.length ? <CartHeader /> : null
            }

            <div className='cart-page__cart-items'>
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

export default ShoppingCartPage;