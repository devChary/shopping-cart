import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {Sidenav} from 'components/UI/organisms';

import './route-wrapper.styles.scss';

export const WithSidebarRoute = ({ component: Component, ...rest }) => {
    return (
        <Routes>
            <Route {...rest} component={(props) => (
                <div className="content" style={{ display: 'flex' }}>
                    <Sidenav /> {/* Sidebar ALWAYS VISIBLE */}
                    <Component {...props} />
                </div>
            )}
            />
         </Routes>
    )
}

export const WithoutSidebarRoute = ({ component: Component, ...rest }) => {
    return (
        <Routes>
            <Route {...rest} component={(props) => (
                <div className="content">
                    <Component {...props} />
                </div>
            )}
            />
        </Routes>
    )
}