import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import loading from "./loadingReducer";
import status from "./statusReducer";
import user from "./userReducer";
import bar from "./barReducer";
import session from "./sessionReducer";

const rootReducer = combineReducers({
  routing,
  loading,
  status,
  user,
  bar,
  session
});

export default rootReducer;
