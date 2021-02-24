import React from 'react';

import CustomButtom from '../../atoms/button/button.component';

import './product.styles.scss';

const Product = (data) => {

    const buttonStyles = {
        marginBottom: '4rem',
        fontSize: '1.5rem',
        padding: '1.6rem 1rem'
    }

    const { product } = data;
    return (
        <div className="product">
            <h1 className="product__name">{product.name}</h1>

            <figure className="product__details-wrapper">
                <img className="product__img" src={product.imageURL} alt={product.name} />

                <figcaption className="product__details">
                    <p className="product__description">{product.description}</p>
                    <CustomButtom style={buttonStyles}>Buy Now @ Rs.{product.price}</CustomButtom>
                </figcaption>
            </figure>
        </div>
    )
}

export default Product;