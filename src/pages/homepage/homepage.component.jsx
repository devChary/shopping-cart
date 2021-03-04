import React, { useState, useEffect } from 'react';

import BannerList from '../../components/UI/templates/banner-list/bannerList.component';
import CategoryList from '../../components/UI/templates/category-list/categoryList.component';

import './homepage.styles.scss';

const Homepage = () => {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/banners`)
            .then(res => res.json())
            .then(json => setBanners(json))
            .catch(err => console.log('Request Failed', err));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(json => setCategories(json))
            .catch(err => console.log('Request Failed', err))
    }, [])

    return (
        <main className="homepage">
            {/* { banners.length ? <BannerList banners={banners} /> : null} */}
            <CategoryList categories={categories} />
        </main>
    )
}

export default Homepage;