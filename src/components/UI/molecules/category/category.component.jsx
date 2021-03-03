import React from 'react';
import { withRouter } from 'react-router';
import CustomButton from '../../atoms/button/button.component';

import './category.styles.scss';

const Category = (props) => {
    debugger
    const { category: { name, imageUrl, description, key } } = props;

    return (
        <figure className="category">
            <img className="category__category_image" src={imageUrl} alt={name} />

            <section className="category__details-wrapper">
                <h4 className="category__title">{name}</h4>
                <p className="category__description">{description}</p>
                <CustomButton onClick={() => props.history.push(`/products/${key}`)}>Explore {key}</CustomButton>
            </section>
        </figure>
    )
}

export default withRouter(Category);