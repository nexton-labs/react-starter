import { SESSION } from "../actions/actionTypes";

export const initialState = {
  logged: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SESSION.LOGGED_BEGIN:
      return Object.assign({}, state);

    case SESSION.LOGGED_COMPLETE:
      return {
        logged: true
      };

    default:
      return state;
  }
}
