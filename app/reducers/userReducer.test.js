import initialState from "./initialState";
import user from "./userReducer";
import * as userActions from "../actions/userActions";
import { USER } from "../actions/actionTypes";

describe("WHEN USER Reducer", () => {
  it(`THEN should work when passed ${USER.USER_INFO_BEGIN}`, () => {
    // Arrange.
    const action = userActions.userInfoRequest();

    // Act.
    const newState = user(initialState.user, action);

    // Assert.
    expect(newState.isFetching).toBe(true);
  });

  it(`THEN should work when passed ${USER.USER_INFO_SUCCESS}`, () => {
    // Arrange.
    const dateReceived = Date.now();
    const userInfoData = {
      name: "user test"
    };

    const action = userActions.userInfoSuccess(userInfoData);

    // Act.
    const newState = user(initialState.user, action);

    // Assert.
    expect(newState.data).toEqual(userInfoData);
    expect(newState.error).toBe(false);
    expect(newState.errorMessage).toBe(null);
    expect(newState.isFetching).toBe(false);
    expect(newState.receivedAt).toBeGreaterThanOrEqual(dateReceived);
  });

  it(`THEN should work when passed ${USER.USER_INFO_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = userActions.userInfoFailed(error.message);

    // Act.
    const newState = user(initialState, action);

    // Assert.
    expect(newState.error).toBe(true);
    expect(newState.errorMessage).toEqual(error.message);
    expect(newState.isFetching).toBe(false);
  });

  it(`THEN should work when passed ${USER.USER_UPDATE_BEGIN}`, () => {
    // Arrange.
    const action = userActions.userUpdateRequest();

    // Act.
    const newState = user(initialState.user, action);

    // Assert.
    expect(newState.isUpdating).toBe(true);
  });

  it(`THEN should work when passed ${USER.USER_UPDATE_SUCCESS}`, () => {
    // Arrange.
    const dateReceived = Date.now();
    const userInfoData = {
      fullName: "user test"
    };

    const action = userActions.userUpdateSuccess(userInfoData);

    // Act.
    const newState = user(initialState.user, action);

    // Assert.
    expect(newState.data).toEqual(userInfoData);
    expect(newState.error).toBe(false);
    expect(newState.errorMessage).toBe(null);
    expect(newState.isFetching).toBe(false);
    expect(newState.receivedAt).toBeGreaterThanOrEqual(dateReceived);
  });

  it(`THEN should work when passed ${USER.USER_UPDATE_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = userActions.userUpdateFailed(error.message);

    // Act.
    const newState = user(initialState, action);

    // Assert.
    expect(newState.error).toBe(true);
    expect(newState.errorMessage).toEqual(error.message);
    expect(newState.isFetching).toBe(false);
  });

  it(`THEN should work when passed ${USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_BEGIN}`, () => {
    // Arrange.
    const action = userActions.verifyOrCreateFromAuth0Request();

    // Act.
    const newState = user(initialState.user, action);

    // Assert.
    expect(newState.bar.isFetching).toBe(true);
  });

  it(`THEN should work when passed ${USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_SUCCESS}`, () => {
    // Arrange.
    const dateReceived = Date.now();
    const bar = {
      id: "3a4ded7d-1184-41ec-be6c-a60f10e801eb",
      contactEmail: "develop02@mail.com",
      accPortal: "12345678",
      accStatement: "102 404",
      backTo: "#main4",
      theme: "Light",
      email: "develop02@mail.com"
    };

    const action = userActions.verifyOrCreateFromAuth0Success(bar);

    // Act.
    const newState = user(initialState.user, action);

    // Assert.
    expect(newState.bar.data).toEqual(bar);
    expect(newState.bar.error).toBe(false);
    expect(newState.bar.errorMessage).toBe(null);
    expect(newState.bar.isFetching).toBe(false);
    expect(newState.bar.receivedAt).toBeGreaterThanOrEqual(dateReceived);
  });

  it(`THEN should work when passed ${USER.USER_VERIFY_OR_CREATE_FROM_AUTH0_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = userActions.verifyOrCreateFromAuth0Failed(error.message);

    // Act.
    const newState = user(initialState, action);

    // Assert.
    expect(newState.bar.error).toBe(true);
    expect(newState.bar.errorMessage).toEqual(error.message);
    expect(newState.bar.isFetching).toBe(false);
  });
});
