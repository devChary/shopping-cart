import React, { useContext } from 'react';

import { CartHeader } from 'components/UI/molecules';
import { CartItem } from 'components/UI/molecules';
import { EmptyCartMessage } from 'components/UI/atoms';
import { EmptyCartFooterOverview } from 'components/UI/templates';

import { ShoppingCartContext } from '../../providers/shopping-cart/shoppingCart.providers';

import './shopping-cart.styles.scss';

const ShoppingCartPage = () => {
    const { cartItems } = useContext(ShoppingCartContext);

    return (
        <div className="cart-page">
            {
                cartItems.length ? <CartHeader /> : null
            }

            <div className='cart-page__cart-items' style={!cartItems.length ? { maxHeight: '100%' } : {}}>
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