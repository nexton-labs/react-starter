import { SESSION } from "./actionTypes";

export function loggedRequest() {
  return {
    type: SESSION.LOGGED_BEGIN
  };
}

export function loggedSuccess() {
  return {
    type: SESSION.LOGGED_COMPLETE
  };
}

export function logged() {
  return function(dispatch) {
    dispatch(loggedRequest());
    dispatch(loggedSuccess());
  };
}
