import React, { useContext } from 'react';

import { CustomButton } from 'components/UI/atoms';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

import './cart-footer.styles.scss'

const CartFooter = () => {

    const styles = {
        borderRadius: '0.3rem',
        width: '100%',
        padding: '1.3rem 1rem',
        fontSize: '1.4rem',
        justifyContent: 'space-between'
    }

    const { cartTotal } = useContext(ShoppingCartContext)

    return (
        <div className="cart-footer">
            <p className="cart-footer__promo-code">Promocode can be applied on payment page</p>
            <CustomButton style={styles}>
                Proceed to Checkout
                    <span>Rs.{cartTotal} &gt;</span>
            </CustomButton>
        </div>
    )
}

export default CartFooter;