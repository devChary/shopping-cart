import React from 'react';

import SidenavItem from '../../atoms/sidenav-item/sidenav-item.component';
import { SidenavItems } from './sidenav.items';

import './sidenav.styles.scss';

const Sidenav = () => {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                {
                    SidenavItems.map(({ name, path, active }) => (
                        <SidenavItem key={name} name={name} path={`/products/${path}`} active={active} />
                    ))
                }
            </ul>
        </nav >
    )
}

export default Sidenav;