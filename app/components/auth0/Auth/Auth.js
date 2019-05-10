import history from "../history";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";
import settings from "../../../config/settings";
import {
  LOCAL_STORAGE_JWT,
  IS_LOGGED_IN,
  JWT_EXPIRES_AT
} from "../../../resources/constants";
import * as localStorageHelper from "../../../helpers/localStorageHelper";

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: settings.SERVICE.host + AUTH_CONFIG.callbackUrl,
    responseType: "token id_token",
    scope: "openid profile"
  });

  constructor(store, userActions) {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);

    this.store = store;
    this.userActions = userActions;
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace("/error");
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in window.localStorage.
    localStorageHelper.setItem(IS_LOGGED_IN, "true");

    // Set the time that the access token will expire at.
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    localStorageHelper.setItem(JWT_EXPIRES_AT, expiresAt);

    // This is what we need to send to server.
    localStorageHelper.setItem(LOCAL_STORAGE_JWT, authResult.idToken);

    this.verifyOrCreateUserFromAuth0(authResult);
  }

  verifyOrCreateUserFromAuth0(authResult) {
    const { dispatch } = this.store;
    const userAuth0 =
      authResult.idTokenPayload && authResult.idTokenPayload.sub;

    dispatch(this.userActions.verifyOrCreateUserFromAuth0(userAuth0)).then(
      () => {
        dispatch(this.userActions.getUserInfo()).then(() => {
          // Navigate to the home route.
          history.replace("/");
        });
      }
    );
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from window.localStorage
    window.localStorage.removeItem(IS_LOGGED_IN);
    window.localStorage.removeItem(LOCAL_STORAGE_JWT);

    this.auth0.logout({
      returnTo: settings.SERVICE.host
    });

    // navigate to the home route
    // history.replace("/home");
  }

  isAuthenticated() {
    // Is logged in.
    const isLoggedIn = localStorageHelper.getItem(IS_LOGGED_IN);

    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = localStorageHelper.getItem(JWT_EXPIRES_AT);
    const isValidExpiryTime = new Date().getTime() < expiresAt;

    return isValidExpiryTime && isLoggedIn;
  }
}
