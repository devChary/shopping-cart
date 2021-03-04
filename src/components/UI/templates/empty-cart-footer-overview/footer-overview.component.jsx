import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import CartFooter from '../../molecules/cart-footer/cart-footer.component';
import PriceInfo from '../../atoms/price-info/price-info.component';
import CustomButton from '../../atoms/button/button.component';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

const EmptyCartFooterOverview = ({ cartItems, history }) => {

    const { hidden, toggleHidden } = useContext(ShoppingCartContext);

    const styles = {
        borderRadius: '0.3rem',
        padding: '1.3rem 1rem',
        fontSize: '1.4rem',
        margin: '1rem',
        marginTop: 'auto'
    }

    const handleAction = () => {
        const screenWidth = window.screen.width;
        history.push('/products');
        if (screenWidth > 1024) {
            if (!hidden) {
                document.body.style.overflow = "scroll";
            } else {
                document.body.style.overflow = "hidden";
            }
            toggleHidden();
        }
    }

    return (
        <>
            {
                cartItems.length ?
                    <>
                        <PriceInfo />
                        <CartFooter />
                    </>
                    : <CustomButton onClick={handleAction} style={styles}>Start Shopping</CustomButton>
            }
        </>
    )
}

export default withRouter(EmptyCartFooterOverview);