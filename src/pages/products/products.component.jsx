import React, { useState, useEffect, createContext } from 'react';
import { Route } from 'react-router-dom';
import ProductOverview from '../../components/templates/product-overview/productOverview.component'

import './products.styles.scss';

export const ProductsContext = createContext();

const ProductsPage = ({ match }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.log('Request Failed', err))
    }, []);
    return (
        <div className='products-page'>
            <ProductsContext.Provider value={products}>
                <Route exact path={match.path} component={ProductOverview} />
                {/* <ProductOverview routeName={match} /> */}
            </ProductsContext.Provider>

        </div>
    )
}
export default ProductsPage;