import React, { useState, useEffect, createContext } from 'react';
import { Route } from 'react-router-dom';
import { fetchData } from '../../utils/api-methods/api-methods';

import { ProductOverview } from 'components/UI/molecules';
import { CategoryItems } from 'components/UI/molecules';

import './products.styles.scss';

export const ProductsContext = createContext();

const ProductsPage = ({ match }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        apiRequest();
    }, []);

    const apiRequest = async () => {
        const productsArr = await fetchData('/products');
        setProducts(productsArr);
    }

    return (
        <div className='products-page'>
            <ProductsContext.Provider value={products}>
                <Route exact path={`${match.path}`} component={() =>
                    <ProductOverview products={products} />} />

                <Route path={`${match.path}/:categoryName`} component={(routeProps) =>
                    <CategoryItems products={products} routeProps={routeProps} />} />
            </ProductsContext.Provider>
        </div>
    )
}
export default ProductsPage;