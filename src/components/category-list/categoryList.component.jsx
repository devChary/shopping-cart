import React from 'react';

import Category from '../category/category.component';

import './categoryList.styles.scss';

const CategoryList = (data) => {
    debugger
    const categories = data.categories;

    return (
        <div className="category-list">
            {categories.length ? categories
                .filter(category => category.order !== -1)
                .map(category => (
                    <Category key={category.id} category={category} />
                )) : null}
        </div>
    )
}



export default CategoryList;