import React from 'react';
import { Product } from 'components/UI/organisms';

import './productOverview.styles.scss';

const ProductOverview = ({ products }) => {
    return (
        <div className="products-overview">
            {
                products && products.length ? products
                    .map(product => (
                        <Product key={product.id} product={product} />
                    )) : null
            }
        </div>

    )
}

export default ProductOverview;
