import React from 'react';
import { Route } from 'react-router-dom';

import Sidenav from '../UI/organisms/sidenav/sidenav.component';

import './route-wrapper.styles.scss';

export const WithSidebarRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <div className="content" style={{ display: 'flex' }}>
                <Sidenav /> {/* Sidebar ALWAYS VISIBLE */}
                <Component {...props} />
            </div>
        )}
        />
    )
}

export const WithoutSidebarRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <div className="content">
                <Component {...props} />
            </div>
        )}
        />
    )
}