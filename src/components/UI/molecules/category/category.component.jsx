import React from 'react';
import { withRouter } from 'react-router';
import { CustomButton } from 'components/UI/atoms';

import './category.styles.scss';

const Category = (props) => {
    const { category: { name, imageUrl, description, key } } = props;

    return (
        <div className="category">
            <img className="category__category_image" src={imageUrl} alt={name} />

            <div className="category__details-wrapper">
                <h4 className="category__title">{name}</h4>
                <p tabIndex="0" className="category__description">{description}</p>
                <CustomButton onClick={() => props.history.push(`/products/${key}`)}>Explore {key}</CustomButton>
            </div>
        </div>
    )
}

export default withRouter(Category);