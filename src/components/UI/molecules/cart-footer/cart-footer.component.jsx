import React from 'react';

import CustomButton from '../../atoms/button/button.component';

import './cart-footer.styles.scss'

const CartFooter = () => {

    const styles = {
        borderRadius: '0.3rem',
        width: '100%',
        padding: '1.3rem 1rem',
        fontSize: '1.4rem',
        justifyContent: 'space-between'
    }

    return (
        <div className="cart-footer">
            <p className="cart-footer__promo-code">Promocode can be applied on payment page</p>
            <CustomButton style={styles}>
                    Proceed to Checkout
                    <span>Rs.187 &gt;</span>
            </CustomButton>
        </div>
    )
}

export default CartFooter;