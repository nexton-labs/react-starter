import { USER } from "./actionTypes";
import { UNKNOWN_ERROR, NOTIFICATION_TIMEOUT } from "../resources/constants";
import { logged } from "./sessionActions";
import * as userService from "../services/userService";

export function userInfoRequest() {
  return {
    type: USER.USER_INFO_BEGIN
  };
}

export function userInfoSuccess(userInfo) {
  return {
    type: USER.USER_INFO_SUCCESS,
    userInfo
  };
}

export function userInfoFailed(error) {
  return {
    type: USER.USER_INFO_FAILED,
    message: error
  };
}

export function userUpdateRequest() {
  return {
    type: USER.USER_UPDATE_BEGIN
  };
}

export function userUpdateSuccess(userInfo) {
  return {
    type: USER.USER_UPDATE_SUCCESS,
    userInfo
  };
}

export function userUpdateFailed(error) {
  return {
    type: USER.USER_UPDATE_FAILED,
    message: error
  };
}

export function verifyOrCreateFromAuth0Request() {
  return {
    type: USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_BEGIN
  };
}

export function verifyOrCreateFromAuth0Success(bar) {
  return {
    type: USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_SUCCESS,
    bar
  };
}

export function verifyOrCreateFromAuth0Failed(error) {
  return {
    type: USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_FAILED,
    message: error
  };
}

export function userReset() {
  return {
    type: USER.USER_RESET
  };
}

export function getUserInfo() {
  return function(dispatch) {
    dispatch(logged());
    dispatch(userInfoRequest());
    return userService
      .getUserAccount()
      .then(response => {
        const userInfo = response.data || {};
        dispatch(userInfoSuccess(userInfo));
      })
      .catch(() => {
        dispatch(userInfoFailed(UNKNOWN_ERROR));
      });
  };
}

export function updateUserInfo(user) {
  return function(dispatch) {
    dispatch(userUpdateRequest());
    return userService
      .updateUserAccount(user)
      .then(response => {
        dispatch(userUpdateSuccess(response.data));
        reset(dispatch);
      })
      .catch(error => {
        const { response } = error;
        const message =
          response && response.data && response.data.message
            ? response.data.message
            : UNKNOWN_ERROR;

        dispatch(userUpdateFailed(message));
        reset(dispatch);
      });
  };
}

export function verifyOrCreateUserFromAuth0(auth0Id) {
  return function(dispatch) {
    dispatch(logged());
    dispatch(verifyOrCreateFromAuth0Request());
    return userService
      .verifyOrCreateUserFromAuth0(auth0Id)
      .then(response => {
        const bar = response && response.data && response.data.bar;
        dispatch(verifyOrCreateFromAuth0Success(bar));
      })
      .catch(() => {
        dispatch(verifyOrCreateFromAuth0Failed(UNKNOWN_ERROR));
      });
  };
}

function reset(dispatch) {
  setTimeout(() => {
    dispatch(userReset());
  }, NOTIFICATION_TIMEOUT);
}
