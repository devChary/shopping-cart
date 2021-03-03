import React, { useContext } from 'react';

import CartHeader from '../../components/UI/molecules/cart-header/cart-header.component';
import CartFooter from '../../components/UI/molecules/cart-footer/cart-footer.component';
import CartItem from '../../components/UI/molecules/cart-item/cart-item.component';
import PriceInfo from '../../components/UI/atoms/price-info/price-info.component';

import { ShoppingCartContext } from '../../providers/shopping-cart/shoppingCart.providers';

import './shopping-cart.styles.scss';
import CustomButtom from '../../components/UI/atoms/button/button.component';

const ShoppingCartPage = ({history}) => {
    const { cartItems } = useContext(ShoppingCartContext);

    const bgColor = {
        white: { backgroundColor: '#fff' },
        lightGrey: { backgroundColor: '#f4f2f2' },
    }

    const styles = {
        borderRadius: '0.3rem',
        padding: '1.3rem 1rem',
        fontSize: '1.4rem',
        margin: '1rem',
        marginTop: 'auto'
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
                            <div className='cart-page__empty-message'>
                                <h3>No items in your cart</h3>
                                <p>Your favourite items are just a click away</p>
                            </div>
                        )
                }
            </div>
            { cartItems.length ?
                <>
                    <PriceInfo />
                    <CartFooter />
                </>
                : <CustomButtom onClick={() => history.push('/products')} style={styles}>Start Shopping</CustomButtom>
            }
        </div>
    )
}

export default ShoppingCartPage;