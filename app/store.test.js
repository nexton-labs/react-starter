import store, { history } from "./store";
import initialState from "./reducers/initialState";

describe("Store", () => {
  it("should be defined", () => {
    expect(store).toBeDefined();
  });

  it("should be a valid store object", () => {
    expect(store).toEqual(
      expect.objectContaining({
        dispatch: expect.any(Function),
        getState: expect.any(Function),
        replaceReducer: expect.any(Function),
        subscribe: expect.any(Function)
      })
    );
  });

  it("should expose a `history` prop", () => {
    expect(history).toBeDefined();
  });

  it("should expose a valid `history` object", () => {
    expect(history).toEqual(
      expect.objectContaining({
        action: expect.any(String),
        block: expect.any(Function),
        createHref: expect.any(Function),
        go: expect.any(Function),
        goBack: expect.any(Function),
        goForward: expect.any(Function),
        length: expect.any(Number),
        listen: expect.any(Function),
        location: {
          hash: expect.any(String),
          pathname: expect.any(String),
          search: expect.any(String),
          state: undefined
        },
        push: expect.any(Function),
        replace: expect.any(Function)
      })
    );
  });

  it("should create the store", () => {
    const expectedState = {
      ...initialState,
      routing: {
        locationBeforeTransitions: null
      }
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
