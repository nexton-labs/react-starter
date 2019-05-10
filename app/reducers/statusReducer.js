import { STATUS } from "../actions/actionTypes";

export const initialState = {
  existError: false,
  errorData: {},
  updatedAt: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS.HANDLE_STATUS_ERROR_SUCCESS:
      return {
        ...state,
        existError: true,
        errorData: action.payload,
        updatedAt: Date.now()
      };

    case STATUS.HANDLE_STATUS_RESET_SUCCESS:
      return {
        existError: false,
        errorData: {},
        updatedAt: null
      };

    default:
      return state;
  }
}
