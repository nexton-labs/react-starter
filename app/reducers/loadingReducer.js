import { LOADING } from "../actions/actionTypes";

export const initialState = {
  appLoading: false
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING.LOADING_BEGIN:
      return {
        ...state,
        fetch: {
          loading: true
        }
      };

    case LOADING.LOADING_COMPLETE:
      return {
        ...state,
        fetch: {
          loading: false
        }
      };

    case LOADING.LOADING_FAILED:
      return {
        ...state,
        fetch: {
          loading: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
}
