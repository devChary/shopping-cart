import React from 'react';

import './category.styles.scss';

const Category = (category) => {
    debugger
    const { category: { name, imageUrl, description, key } } = category;

    return (
        <figure className="category">
            <img className="category__category_image" src={imageUrl} alt={name} />

            <article className="category__details-wrapper">
                <h4 className="category__title">{name}</h4>
                <p className="category__description">{description}</p>
                <button className="category__button">Explore {key}</button>
            </article>
        </figure>
    )
}

export default Category;