import React, { useContext } from 'react';
import { ProductsContext } from '../../../pages/products/products.component';
import Product from '../../UI/organisms/product/product.component';

import './productOverview.styles.scss';

const ProductOverview = ({ routeName }) => {
    const products = useContext(ProductsContext)
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
