import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { STATUS } from "./actionTypes";
import * as statusActions from "./statusActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("GIVEN Status Actions", () => {
  describe("GIVEN Reset Status", () => {
    let successAction;

    xdescribe("WHEN resetStatus() action is call with correct params", () => {
      beforeAll(() => {
        const store = mockStore({});

        return store.dispatch(statusActions.resetStatus()).then(() => {
          const actions = store.getActions();
          successAction = actions[0];
        });
      });

      it(`THEN should be able to dispatch ${
        STATUS.HANDLE_STATUS_RESET_SUCCESS
      }`, () => {
        expect(successAction).toEqual({
          type: STATUS.HANDLE_STATUS_RESET_SUCCESS
        });
      });
    });
  });
});
