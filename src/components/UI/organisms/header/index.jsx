import React, { useContext } from 'react';
import {withRouter} from 'components/HOCs/withRouter'
import { Link } from 'react-router-dom';

import CartDropdown from 'components/UI/organisms/cart-dropdown';
import NavIcon from 'components/UI/atoms/nav-icon';
import CartIcon from 'components/UI/atoms/cart-icon';

import { ShoppingCartContext } from 'providers/shopping-cart/shoppingCart.providers';

import './header.styles.scss';

const Header = ({ history }) => {

    const svgIconStyles = {
        fill: '#ba265d',
        width: '4rem',
        height: '4rem',
        margin: '0.75rem',
        enableBackground: 'new 0 0 24 24'
    }

    const { cartItemsCount, hidden, toggleHidden } = useContext(ShoppingCartContext);
    const showCart = () => {
        const screenWidth = window.screen.width;
        if (screenWidth <= 1024) {
            history.push('/shopping-cart');
            return;
        }
        toggleHidden();
    }

    return (
        <header className="header">
            <div className="items-wrapper">
                <Link className="logo-container" to="/">
                    <img className="logo" srcSet="/static/assets/logo_2x.png 768w, /static/assets/logo.png 480w"
                        src="/static/assets/logo.png"
                        alt="Sabka Bazaar Logo" />
                </Link>

                <NavIcon />

                <nav className="user-nav">
                    <Link className="user-nav__nav-item" to="/">
                        Home
                    </Link>
                    <Link className="user-nav__nav-item" to="/products">
                        Products
                    </Link>
                </nav>
            </div>

            <div className="user">
                <div className="auth-links">
                    <Link className="auth-links__item" to="/login">
                        Signin
                    </Link>
                    <Link className="auth-links__item" to="/signup">
                        Register
                    </Link>
                </div>
                <div className="user-cart">
                    <div onClick={showCart} className="user-cart__logo-box">
                        <CartIcon style={svgIconStyles} />
                        <span>{cartItemsCount} items</span>
                    </div>
                </div>
            </div>
            {hidden ? null : <CartDropdown />}
        </header >
    )
}

export default withRouter(Header);