import axios from "axios";
import settings from "../config/settings";
import { LOCAL_STORAGE_JWT } from "../resources/constants";
import * as localStorageHelper from "../helpers/localStorageHelper";

const setRestApiUrl = (endpoint, id = undefined) => {
  const apiUrl = `${settings.SERVICE.baseurl}/${endpoint}${id ? `/${id}` : ``}`;

  return apiUrl;
};

const getHeaders = () => {
  const token = localStorageHelper.getItem(LOCAL_STORAGE_JWT);

  return {
    "x-access-token": token
  };
};

export default {
  get: (endpoint, params = {}) =>
    axios.get(setRestApiUrl(endpoint), { params, headers: getHeaders() }),

  getById: (endpoint, id, data = {}) =>
    axios.get(setRestApiUrl(endpoint, id), { headers: getHeaders() }),

  post: (endpoint, data = {}) =>
    axios.post(setRestApiUrl(endpoint), data, { headers: getHeaders() }),

  put: (endpoint, id, data = {}) =>
    axios.put(setRestApiUrl(endpoint, id), data, { headers: getHeaders() }),

  putWithoutId: (endpoint, data = {}) =>
    axios.put(setRestApiUrl(endpoint), data, { headers: getHeaders() }),

  delete: (endpoint, id) =>
    axios.delete(setRestApiUrl(endpoint, id), {
      headers: getHeaders()
    })
};
