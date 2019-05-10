import { LOCAL_STORAGE_JWT } from "../resources/constants";
import * as localStorageHelper from "../helpers/localStorageHelper";
import jwtDecode from "jwt-decode";

export const getPathAfterLoginByUserRole = () => {
  return "/";
};

export const getCurrentUserRole = () => {
  const jwt = localStorageHelper.getItem(LOCAL_STORAGE_JWT);

  if (!jwt) return false;

  const tokenPayload = jwtDecode(jwt);
  return tokenPayload && tokenPayload.scopes[0];
};

export const hasActiveToken = () => {
  return localStorageHelper.getItem(LOCAL_STORAGE_JWT);
};
