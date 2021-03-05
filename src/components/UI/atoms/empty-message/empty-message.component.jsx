import React from 'react';

import './empty.styles.scss';

const EmptyCartMessage = () => (
    <div tabIndex="0" className='empty-message'>
        <h3>No items in your cart</h3>
        <p>Your favourite items are just a click away</p>
    </div>
)

export default EmptyCartMessage;