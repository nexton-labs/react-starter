import loadingReducer, { initialState } from "./loadingReducer";
import { LOADING } from "../actions/actionTypes";

describe("loadingReducer", () => {
  it("should be defined", () => {
    expect(loadingReducer).toBeDefined();
  });

  it("should be a function", () => {
    expect(loadingReducer).toEqual(expect.any(Function));
  });

  it("should return the initial state", () => {
    expect(loadingReducer(undefined, {})).toEqual(initialState);
  });

  it("should set appLoading to `true` ", () => {
    const action = {
      type: LOADING.LOADING_BEGIN
    };
    const expectedState = {
      ...initialState,
      fetch: {
        loading: true
      }
    };

    expect(loadingReducer(initialState, action)).toEqual(expectedState);
  });

  it("should set the appLoading to `false`", () => {
    const action = {
      type: LOADING.LOADING_COMPLETE
    };
    const expected = {
      ...initialState,
      fetch: {
        loading: false
      }
    };

    expect(loadingReducer(initialState, action)).toEqual(expected);
  });
});
