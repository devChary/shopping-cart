import React, { useContext } from 'react';
import { ProductsContext } from '../../../pages/products/products.component';

import Product from '../../UI/organisms/product/product.component';

import './categoryItems.styles.scss';

const CategoryItems = ({ match }) => {

    const products = useContext(ProductsContext);
    return (
        <div className="category-items">
            {
                products.length ? products
                    .filter(product => product.categoryName === match.params.categoryName)
                    .map(product => (
                        <Product key={product.id} product={product} />
                    )) : null
            }
        </div>
    )
}

export default CategoryItems;