import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import status from "./statusReducer";
import user from "./userReducer";
import session from "./sessionReducer";

const rootReducer = combineReducers({
  routing,
  status,
  user,
  session
});

export default rootReducer;
