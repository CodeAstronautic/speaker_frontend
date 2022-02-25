import React from 'react';
import { Route, Navigate  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    console.log(localStorage.getItem('@userData'),"from private")
    return (
        <Route
            {...rest}
            render={props => (
                localStorage.getItem('@userData')
                    ? <Component {...props} />
                    : <Navigate  to="/login" />
            )}
        />
    )
};

export default PrivateRoute;