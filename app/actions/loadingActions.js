import { LOADING } from "./actionTypes";

export const beginLoading = () => ({
  type: LOADING.LOADING_BEGIN
});

export const completeLoading = () => ({
  type: LOADING.LOADING_COMPLETE
});

export const failedLoading = error => ({
  type: LOADING.LOADING_COMPLETE,
  payload: { error }
});
