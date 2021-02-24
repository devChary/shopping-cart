import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='group__form-input' onChange={handleChange} {...otherProps} />
            {/* {label ? (
                <label
                    className="form-input-label">
                    {label}
                </label>
            ) : null} */}
        </div>)
};

export default FormInput;
