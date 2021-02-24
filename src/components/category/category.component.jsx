import React from 'react';

import CustomButton from '../UI/atoms/button/button.component';

import './category.styles.scss';

const Category = (category) => {
    const { category: { name, imageUrl, description, key } } = category;

    return (
        <figure className="category">
            <img className="category__category_image" src={imageUrl} alt={name} />

            <figcaption className="category__details-wrapper">
                <h4 className="category__title">{name}</h4>
                <p className="category__description">{description}</p>
                <CustomButton>Explore {key}</CustomButton>
            </figcaption>
        </figure>
    )
}

export default Category;