import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Callback from "./components/auth0/Callback/Callback";
import Auth from "./components/auth0/Auth/Auth";
import App from "./components/App";

import ErrorPage from "./components/pages/Error/ErrorPage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";

import BarSettingsPage from "./components/pages/BarSettings/BarSettingsPage";
import AccountPage from "./components/pages/Account/AccountPage";
import StatsPage from "./components/pages/Stats/StatsPage";

export default class {
  constructor(store, userActions) {
    this.store = store;
    this.auth = new Auth(store, userActions);
  }

  handleAuthentication({ location }) {
    if (/access_token|id_token|error/.test(location.hash)) {
      this.auth.handleAuthentication();
    }
  }

  configureRoutes() {
    return (
      <App auth={this.auth}>
        <Switch>
          <AuthenticateRoute
            path="/"
            exact
            component={BarSettingsPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path="/bar-settings"
            component={BarSettingsPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path="/account"
            component={AccountPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path="/stats"
            component={StatsPage}
            auth={this.auth}
          />
          <Route
            path="/callback"
            render={props => {
              this.handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route path="/error" component={ErrorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </App>
    );
  }
}

const AuthenticateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    return rest.auth.isAuthenticated();
  };

  const isAuthorized = () => {
    return true; // At the moment We're not going to handle Roles so all calls will be Authorized.
  };

  const checkAuthorization = properties => {
    return isAuthorized() ? (
      <Component {...properties} />
    ) : (
      rest.auth.isAuthenticated()
    );
  };

  return (
    <Route
      {...rest}
      render={properties =>
        isAuthenticated() ? checkAuthorization(properties) : rest.auth.login()
      }
    />
  );
};

AuthenticateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object
};
