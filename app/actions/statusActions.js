import { push } from "react-router-redux";
import { STATUS } from "./actionTypes";

export const handleStatusErrorSuccess = error => ({
  type: STATUS.HANDLE_STATUS_ERROR_SUCCESS,
  payload: error
});

export const handleStatusResetSuccess = () => ({
  type: STATUS.HANDLE_STATUS_RESET_SUCCESS
});

export function handleStatusError(errorPayload) {
  return dispatch => {
    const error = {
      status:
        errorPayload && errorPayload.response && errorPayload.response.status
    };

    dispatch(handleStatusErrorSuccess(error));
    dispatch(push("/error"));
  };
}

export function resetStatus() {
  return dispatch => {
    return dispatch(handleStatusResetSuccess());
  };
}
