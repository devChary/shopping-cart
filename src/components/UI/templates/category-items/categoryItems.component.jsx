import React from 'react';

import { Product } from 'components/UI/organisms';

import './categoryItems.styles.scss';

const CategoryItems = ({ routeProps, products }) => {

    const { match } = routeProps;

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