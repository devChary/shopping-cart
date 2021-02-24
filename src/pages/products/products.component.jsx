import React, { useState, useEffect } from 'react';
// import Route from 'react-router-dom';

import Product from '../../components/UI/organisms/product/product.component';

import './products.styles.scss';

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
            {
                products.length ? products.map(product => (
                    <Product key={product.id} product={product} />
                )) : null
            }
        </div>
    )
}
export default ProductsPage;