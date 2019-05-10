import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import * as userActions from "./actions/userActions";

import { Router } from "react-router-dom";
import history from "./components/auth0/history";

import Routes from "./routes";
import store from "./store";

// Bootstrap and styles
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles/sb-admin-2.css";
import "./styles/main.css";

const routes = new Routes(store, userActions).configureRoutes();

render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.querySelector("#app")
);
