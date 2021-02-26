import React from 'react';
import { Link } from 'react-router-dom';

import './sidenav-item.styles.scss';

const SidenavItem = ({ name, path, active }) => (
    <li key={name} className={`side-nav__item ${active ? 'side-nav__item--active' : ''}`}>
        <Link className={`side-nav__link`} to={path}>{name}</Link>
    </li>
)

export default SidenavItem;