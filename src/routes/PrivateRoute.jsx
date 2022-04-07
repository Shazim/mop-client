import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCookie } from 'cookies/Cookies';

function PrivateRoute({ component: Component, path, privateRoute, ...rest }) {
  const { access_token, refresh_token } =
    (getCookie('user') && JSON.parse(getCookie('user'))) || {};

  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        access_token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
