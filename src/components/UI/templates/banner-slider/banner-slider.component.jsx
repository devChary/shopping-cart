import React from 'react';

import './banner-slider.styles.scss';

import Slider from "react-slick";


const BannerSlider = ({ banners }) => {

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'gallery',
        arrows: true,
        infinite: true,
    };

    return (
        <div className="banner">
            <Slider {...settings}>
                {
                    banners.length ? banners.map(item => (
                        <img key={item.id} className="banner_image" src={`${item.bannerImageUrl}`} alt={item.bannerImageAlt} />
                    )) : null
                }
            </Slider>
        </div>
    )
}

export default BannerSlider;