import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/button/button.component';

import './login.styles.scss';

const LoginPage = () => {

    const buttonStyles = {
        width: '100%',
        padding: '1.6rem 0',
        fontSize: '1.6rem',
        marginTop: '1rem'
    }
    const [user, setUser] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(user);
    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        setUser({ [name]: value });
    }
    return (
        <div className="login">
            <h2 className="login__title">Login</h2>
            <p className="login__sub-title">Get access to your Orders, Wishlist and Recommendations</p>

            <form className="login__form" onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={user.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={user.password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <CustomButton style={buttonStyles} type='submit'> Login </CustomButton>
            </form >
        </div >
    )
}

export default LoginPage;