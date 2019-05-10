import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { USER } from "./actionTypes";
import * as userActions from "./userActions";
import * as userService from "../services/userService";
import { UNKNOWN_ERROR } from "../resources/constants";

jest.mock("../services/userService");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  userService.getUserAccount.mockReset();
  userService.updateUserAccount.mockReset();
});

describe("GIVEN User Actions", () => {
  describe("GIVEN Get User Account", () => {
    describe("WHEN getUserInfo() action is call with correct params", () => {
      let requestAction;
      let successAction;
      const userResponse = {
        data: {
          email: "contact@mail.com",
          fullName: "contact"
        }
      };

      const getUserServiceSpy = jest.spyOn(userService, "getUserAccount");
      const expectedUserResponse = {
        ...userResponse
      };

      beforeAll(() => {
        userService.getUserAccount.mockImplementation(() =>
          Promise.resolve(userResponse)
        );

        const store = mockStore({});

        return store.dispatch(userActions.getUserInfo()).then(() => {
          const actions = store.getActions();
          requestAction = actions[2];
          successAction = actions[3];
        });
      });

      it(`THEN should be able to dispatch ${USER.USER_INFO_BEGIN} and ${
        USER.USER_INFO_SUCCESS
      }`, () => {
        expect(getUserServiceSpy).toHaveBeenCalledTimes(1);

        expect(requestAction).toEqual({
          type: USER.USER_INFO_BEGIN
        });

        expect(successAction).toEqual({
          type: USER.USER_INFO_SUCCESS,
          userInfo: expectedUserResponse.data
        });
      });
    });

    describe("WHEN getUserInfo() action is call with bad endpoint called", () => {
      let actions;

      beforeAll(() => {
        userService.getUserAccount.mockImplementation(() =>
          Promise.reject(new Error("Mocked Error"))
        );

        const store = mockStore({});

        return store.dispatch(userActions.getUserInfo()).then(() => {
          actions = store.getActions();
        });
      });

      it(`THEN should be able to dispatch ${USER.USER_INFO_BEGIN} and ${
        USER.USER_INFO_FAILED
      }`, () => {
        expect(actions[2]).toEqual({
          type: USER.USER_INFO_BEGIN
        });
        expect(actions[3]).toEqual({
          type: USER.USER_INFO_FAILED,
          message: UNKNOWN_ERROR
        });
      });
    });
  });

  describe("GIVEN Update User Account", () => {
    describe("WHEN updateUserAccount() action is call with correct params", () => {
      let requestAction;
      let successAction;

      const updateUserServiceSpy = jest.spyOn(userService, "updateUserAccount");

      beforeAll(() => {
        const payload = {
          fullName: "new contact"
        };

        userService.updateUserAccount.mockImplementation(() =>
          Promise.resolve(payload)
        );
        const store = mockStore({});

        return store
          .dispatch(userActions.updateUserInfo(payload.fullName))
          .then(() => {
            const actions = store.getActions();
            requestAction = actions[0];
            successAction = actions[1];
          });
      });

      it(`THEN should be able to dispatch ${USER.USER_UPDATE_BEGIN} and ${
        USER.USER_UPDATE_SUCCESS
      } when updateUserAccount() action is call with correct params`, () => {
        expect(requestAction).toEqual({
          type: USER.USER_UPDATE_BEGIN
        });

        expect(updateUserServiceSpy).toHaveBeenCalledTimes(1);
        expect(successAction).toEqual({
          type: USER.USER_UPDATE_SUCCESS
        });
      });
    });

    describe("WHEN updateUserAccount() action is call with bad endpoint called", () => {
      let requestAction;
      let errorAction;

      beforeAll(() => {
        const payload = "new contact";

        userService.updateUserAccount.mockImplementation(() =>
          Promise.reject(new Error("Mocked Error"))
        );

        const store = mockStore({});

        return store.dispatch(userActions.updateUserInfo(payload)).then(() => {
          const actions = store.getActions();
          requestAction = actions[0];
          errorAction = actions[1];
        });
      });

      it(`THEN should be able to dispatch ${USER.USER_UPDATE_BEGIN} and ${
        USER.USER_UPDATE_FAILED
      }`, () => {
        expect(requestAction).toEqual({
          type: USER.USER_UPDATE_BEGIN
        });

        expect(errorAction).toEqual({
          type: USER.USER_UPDATE_FAILED,
          message: UNKNOWN_ERROR
        });
      });
    });
  });
});
