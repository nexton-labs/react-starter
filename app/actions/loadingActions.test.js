import * as loadingActions from "./loadingActions";
import { LOADING } from "./actionTypes";

describe("Loading Actions", () => {
  describe("When calling beginLoading", () => {
    let actions;
    beforeEach(() => {
      actions = loadingActions.beginLoading();
    });

    it("should return expected object", () => {
      expect(actions).toEqual({
        type: LOADING.LOADING_BEGIN
      });
    });
  });

  describe("When calling completeLoading", () => {
    let actions;
    beforeEach(() => {
      actions = loadingActions.completeLoading();
    });

    it("should return expected object", () => {
      expect(actions).toEqual({
        type: LOADING.LOADING_COMPLETE
      });
    });
  });
});
