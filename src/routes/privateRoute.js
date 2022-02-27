import React from 'react';
import { Route, Navigate  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    console.log(localStorage.getItem('@token'),"from private")
    return (
        <Route
            {...rest}
            render={props => (
                localStorage.getItem('@token')
                    ? <Component {...props} />
                    : <Navigate  to="/login" />
            )}
        />
    )
};

export default PrivateRoute;