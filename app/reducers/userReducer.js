import { USER } from "../actions/actionTypes";

export const initialState = {
  data: {},
  isFetching: false,
  isUpdating: false,
  receivedAt: null,
  error: false,
  updated: false,
  errorMessage: null,
  bar: {
    data: {},
    isFetching: false,
    receivedAt: null,
    error: false,
    errorMessage: null
  },
  logged: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USER.USER_INFO_BEGIN:
      return Object.assign({}, state, {
        isFetching: true
      });

    case USER.USER_INFO_SUCCESS:
      return {
        data: {
          ...action.userInfo
        },
        error: false,
        errorMessage: null,
        isFetching: false,
        receivedAt: Date.now()
      };

    case USER.USER_INFO_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        receivedAt: Date.now(),
        data: null
      };

    case USER.USER_UPDATE_BEGIN:
      return Object.assign({}, state, {
        isUpdating: true
      });

    case USER.USER_UPDATE_SUCCESS:
      return {
        data: {
          ...action.userInfo
        },
        error: false,
        updated: true,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        receivedAt: Date.now()
      };

    case USER.USER_UPDATE_FAILED:
      return {
        error: true,
        updated: false,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        receivedAt: Date.now(),
        data: {
          ...state.data
        }
      };

    case USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_BEGIN:
      return Object.assign({}, state, {
        bar: {
          ...state.bar,
          isFetching: true
        }
      });

    case USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_SUCCESS:
      return Object.assign({}, state, {
        bar: {
          data: action.bar,
          error: false,
          errorMessage: null,
          isFetching: false,
          receivedAt: Date.now()
        },
        logged: true
      });

    case USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_FAILED:
      return Object.assign({}, state, {
        bar: {
          ...state.bar,
          isFetching: false,
          error: true,
          errorMessage: action.message
        },
        logged: false
      });

    case USER.USER_RESET:
      return {
        error: false,
        updated: false,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now(),
        data: {
          ...state.data
        }
      };

    default:
      return state;
  }
}
