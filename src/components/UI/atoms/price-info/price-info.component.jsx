import React from 'react';

import './price-info.styles.scss'

const PriceInfo = () => {
    return (
        <figure className="price-info">
            <img className="price-info__img" src="/static/assets/lowest-price.png" alt="Lowest Price Guaranteed" />
            <figcaption className="price-info__tagline">You won't it cheaper anywhere</figcaption>
        </figure>
    )
}

export default PriceInfo;