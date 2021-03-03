import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers'
import CustomButtom from '../../atoms/button/button.component';

import './product.styles.scss';

const Product = (data) => {

    const buttonStyles = {
        fontSize: '1.5rem',
        padding: '1.5rem 1rem',
        width: '100%'
    }

    const { product } = data;
    const { addItem } = useContext(ShoppingCartContext);


    return (
        <div className="product">
            <h1 className="product__title">{product.name}</h1>

            <div className="product__img-wrapper">
                <img loading="lazy" className="product__img" src={product.imageURL} alt={product.name} />
            </div>
            <p className="product__description">{product.description}</p>
            <div className="product__btn-wrapper">
                {/* <div className="product__mrp">MRP Rs {product.price}</div> */}
                <CustomButtom onClick={() => addItem(product)} style={buttonStyles}>Buy Now <span className="product__btn-mrp">@ Rs.{product.price}</span></CustomButtom>
            </div>
        </div >
    )
}

export default Product;