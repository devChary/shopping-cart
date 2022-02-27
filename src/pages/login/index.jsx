import React, { useState } from 'react';

import FormInput from '../../components/UI/atoms/form-input';
import CustomButton from '../../components/UI/atoms/button';

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

        setUser({ ...user, [name]: value });
    }
    return (
        <div className="login">

            <div className="login__header">
                <h2 className="login__title">Login</h2>
                <p className="login__sub-title">Get access to your Orders, Wishlist and Recommendations</p>
            </div>

            <form method="post" className="login__form" onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={user.email}
                    label='Email'
                    aria-label="Email"
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={user.password}
                    handleChange={handleChange}
                    label='Password'
                    aria-label="Password"
                    required
                />
                <CustomButton style={buttonStyles} type='submit'> Login </CustomButton>
            </form >
        </div >
    )
}

export default LoginPage;