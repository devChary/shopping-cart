import React, { useState } from 'react';

import FormInput from '../../components/UI/atoms/form-input/form-input.component';
import CustomButton from '../../components/UI/atoms/button/button.component';

import './signup.styles.scss';

const SignupPage = () => {

    const buttonStyles = {
        width: '100%',
        padding: '1.6rem 0',
        fontSize: '1.6rem',
        marginTop: '1rem',
        marginBottom: '1rem'
    }
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    }
    return (
        <div className="signup">
            <div className="signup__header">
                <h2 className="signup__title">Signup</h2>
                <p className="signup__sub-title">We do not share your personal details with anyone</p>
            </div>

            <form method="post" className="signup__form" onSubmit={handleSubmit}>
                <FormInput
                    name='firstName'
                    type='text'
                    handleChange={handleChange}
                    value={user.firstName}
                    label='First Name'
                    aria-label="First Name"
                    required
                />
                <FormInput
                    name='lastName'
                    type='text'
                    value={user.lastName}
                    handleChange={handleChange}
                    label='Last Name'
                    aria-label="Lastname"
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    value={user.email}
                    handleChange={handleChange}
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
                    required
                    aria-label="Password should have atleast one Capitalcase and one smallcase alphabet, one number and special character, the length should be atleast 13 characters for a strong password"
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={user.confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                    aria-label="Confirm Password should be exactly the same as the password enter above"
                />
                <CustomButton style={buttonStyles} type='submit'> Signup </CustomButton>
            </form >
        </div >
    )
}

export default SignupPage;