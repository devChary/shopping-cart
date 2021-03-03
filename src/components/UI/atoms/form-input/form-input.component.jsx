import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='group__form-input' onChange={handleChange} {...otherProps} />
            {label ? (
                <label htmlFor={label}
                    className={`${otherProps.value.length ? 'shrink' : ''
                        } group__form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>)
};

export default FormInput;
