import React from 'react';

import CartIcon from '../cart-icon/cartIcon.component';

import './header.styles.scss';

const Header = () => {

    const svgIconStyles = {
        fill: '#ba265d',
        width: '4rem',
        height: '4rem',
        margin: '1rem',
        enableBackground: 'new 0 0 24 24'
    }

    return (
        <header className="header">
            <img src="/static/assets/logo.png" alt="Sabka Bazaar Logo" className="logo" />

            <nav className="user-nav">
                <div className="user-nav__nav-item">
                    <a href="#" className="user-nav__home">Home</a>
                </div>
                <div className="user-nav__nav-item">
                    <a href="#" className="user-nav__products">Products</a>
                </div>
            </nav>

            <div className="user-cart">
                <div className="user-cart__logo-box">
                    <CartIcon style={svgIconStyles} />
                    <span>0 items</span>
                </div>
            </div>
        </header >
    )
}

export default Header;