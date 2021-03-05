import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

import CustomButton from '../../atoms/button/button.component';

import './cart-item.styles.scss'

const CartItem = ({ item }) => {

    const { imageURL, price, name, quantity } = item;

    const buttonStylesSmall = {
        borderRadius: '0.4rem',
        padding: '0.5rem 1.2rem',
        fontSize: '1.2rem'
    }

    const buttonStylesLarge = {
        borderRadius: '50%',
        fontSize: '0.8rem',
        padding: '0.5rem 0.8rem',
    }

    const styles = window.screen.width <= 1024 ? buttonStylesSmall : buttonStylesLarge;

    const { addItem, removeItem } = useContext(ShoppingCartContext);

    return (
        <div className='cart-item'>
            <img className="cart-item__img" src={imageURL} alt={name} />
            <div className='cart-item__details'>
                <h4 className='cart-item__name'>{name}</h4>
                <div className='cart-item__inner-wrapper'>
                    <div className="cart-item__action-items">
                        <CustomButton aria-label={`Decrease ${name} quantity by 1`} onClick={() => removeItem(item)} style={styles}> &#8722; </CustomButton>
                        <span>{quantity}</span>
                        <CustomButton aria-label={`Increase ${name} quantity by 1`} onClick={() => addItem(item)} style={styles}> + </CustomButton>
                        <span>x</span>
                        <span>${price}</span>
                    </div>

                    <div className="cart-item__total">${quantity * price}</div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;