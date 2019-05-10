import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers/rootReducer";

export const history = createBrowserHistory();

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunkMiddleware)
  )
);
