import React, { useState, useEffect } from 'react';
import { fetchData } from '../../utils/api-methods/api-methods';

import { BannerSlider, CategoryList } from 'components/UI/molecules';

import './homepage.styles.scss';

const Homepage = () => {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        apiRequest();
    }, []);

    const apiRequest = async () => {
        const bannerArr = await fetchData(`/banners`);
        setBanners(bannerArr)

        const categoryArr = await fetchData('/categories');
        setCategories(categoryArr);
    }

    return (
        <main className="homepage">
            <BannerSlider banners={banners} />
            <CategoryList categories={categories} />
        </main>
    )
}

export default Homepage;