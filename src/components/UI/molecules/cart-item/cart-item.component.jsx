import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

import CustomButton from '../../atoms/button/button.component';

import './cart-item.styles.scss'

const CartItem = ({ item }) => {

    const { imageURL, price, name, quantity } = item;

    const buttonStyles = {
        borderRadius: '0.4rem',
        padding: '0.5rem 1.2rem',
        fontSize: '1.2rem'
    }

    const { addItem, removeItem } = useContext(ShoppingCartContext);

    return (
        <div className='cart-item'>
            <img className="cart-item__img" src={imageURL} alt='item' />
            <div className='cart-item__details'>
                <h4 className='cart-item__name'>{name}</h4>
                <div className='cart-item__inner-wrapper'>
                    <div className="cart-item__action-items">
                        <CustomButton onClick={() => removeItem(item)} style={buttonStyles}> &#8722; </CustomButton>
                        <span>{quantity}</span>
                        <CustomButton onClick={() => addItem(item)} style={buttonStyles}> + </CustomButton>
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