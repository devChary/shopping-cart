import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import CartDropdown from '../../organisms/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../atoms/cart-icon/cartIcon.component';

import { ShoppingCartContext } from '../../../../providers/shopping-cart/shoppingCart.providers';

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
        debugger
        const screenWidth = window.screen.width;
        if (screenWidth > 1024) {
            debugger
            if (!hidden) {
                // document.body.style.backgroundColor = 'transparent';
                document.body.style.overflow = "scroll";
            } else {
                // document.body.style.filter = 'blur(4px)';
                document.body.style.overflow = "hidden";
            }
            return toggleHidden();
        }
        history.push('/shopping-cart');
    }

    return (
        <header className="header">
            <div className="items-wrapper">
                <Link className="logo-container" to="/">
                    <img src="/static/assets/logo.png" alt="Sabka Bazaar Logo" className="logo" />
                    {/* <img srcSet="/static/assets/logo.png 0.5x, /static/assets/logo_2x.png 2x"
                        src="/static/assets/logo.png"
                        alt="Sabka Bazaar Logo" /> */}
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