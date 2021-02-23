import React from 'react';

import Banner from '../banner/banner.component';

import './bannerList.styles.scss';

const BannerList = (banners) => (
    <div className="banners">
        {banners.length ? banners.map(banner => (
            <Banner key={banner.id} banner={banner} />
        )): null}
    </div>
)

export default BannerList;
