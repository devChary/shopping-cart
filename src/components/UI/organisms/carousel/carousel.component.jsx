import React, { useState } from 'react';

const Carousel = ({ children }) => {
    const carousel = useCarousel(slideTime);

    const [currentBanner, setCurrentBanner] = useState(0);

    return (
        <div className="carousel">
            <div className="carousel__outer-wrapper">
                <div className="carousel__inner-wrapper">
                    {
                        children.map(item => (
                            <div className="carousel__item-container">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;