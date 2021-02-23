import React from 'react';

import './banner.styles.scss';

const Banner = (banner) => {
    debugger
    const { banner: { bannerImageAlt, bannerImageUrl } } = banner;
    
    return (
        <div className="banner">
            <p className="banner__banner-title">{bannerImageAlt}</p>
            <img className="banner__banner_image" src={`${bannerImageUrl}`} alt={bannerImageAlt} />
        </div>
    )
}

export default Banner;