import { createStore } from "redux";
import rootReducer from "./rootReducer";
import initialState from "./initialState";

describe("rootReducer", () => {
  it("should set the inital state", () => {
    const expectedState = {
      ...initialState,
      routing: {
        locationBeforeTransitions: null
      }
    };

    const store = createStore(rootReducer);

    expect(store.getState()).toEqual(expectedState);
  });
});
