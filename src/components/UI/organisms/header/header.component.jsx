import React from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../../atoms/cart-icon/cartIcon.component';

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
            <div className="items-wrapper">
                <Link className="logo-container" to="/">
                    <img src="/static/assets/logo.png" alt="Sabka Bazaar Logo" className="logo" />
                </Link>

                <nav className="user-nav">
                    <Link className="user-nav__nav-item" to="/">
                        Home
                    </Link>
                    <Link className="user-nav__nav-item" to="/products">
                        Products
                    </Link>

                </nav>
            </div>

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