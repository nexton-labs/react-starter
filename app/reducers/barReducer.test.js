import initialState from "./initialState";
import bars from "./barReducer";
import * as barsActions from "../actions/barsActions";
import { BARS } from "../actions/actionTypes";

describe("WHEN BARS Reducer", () => {
  it(`THEN should work when passed ${BARS.BAR_BEGIN}`, () => {
    // Arrange.
    const action = barsActions.barRequest();

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.isFetching).toBe(true);
  });

  it(`THEN should work when passed ${BARS.BAR_SUCCESS}`, () => {
    // Arrange.
    const dateReceived = Date.now();
    const barData = {
      id: "",
      contactEmail: "",
      accStatement: "",
      skipTo: "",
      accPortal: "",
      theme: "",
      domains: []
    };

    const action = barsActions.barSuccess(barData);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.data).toEqual(barData);
    expect(newState.error).toBe(false);
    expect(newState.errorMessage).toBe(null);
    expect(newState.isFetching).toBe(false);
    expect(newState.receivedAt).toBeGreaterThanOrEqual(dateReceived);
  });

  it(`THEN should work when passed ${BARS.BAR_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = barsActions.barFailed(error.message);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.error).toBe(true);
    expect(newState.errorMessage).toEqual(error.message);
    expect(newState.isFetching).toBe(false);
  });

  it(`THEN should work when passed ${BARS.BAR_UPDATE_BEGIN}`, () => {
    // Arrange.
    const action = barsActions.barUpdateRequest();

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.isUpdating).toBe(true);
  });

  it(`THEN should work when passed ${BARS.BAR_UPDATE_SUCCESS}`, () => {
    // Arrange.
    const dateUpdated = Date.now();
    const barData = {
      id: "123456",
      contactEmail: "contact@mail.com",
      accStatement: "all ok",
      skipTo: "main",
      accPortal: "portal",
      theme: "Dark",
      domains: []
    };

    const action = barsActions.barUpdateSuccess(barData);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.data).toEqual(barData);
    expect(newState.error).toBe(false);
    expect(newState.errorMessage).toBe(null);
    expect(newState.isFetching).toBe(false);
    expect(newState.updatedAt).toBeGreaterThanOrEqual(dateUpdated);
  });

  it(`THEN should work when passed ${BARS.BAR_UPDATE_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = barsActions.barUpdateFailed(error.message);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.error).toBe(true);
    expect(newState.errorMessage).toEqual(error.message);
    expect(newState.isFetching).toBe(false);
  });

  it(`THEN should work when passed ${BARS.BAR_CREATE_DOMAIN_BEGIN}`, () => {
    // Arrange.
    const action = barsActions.barUpdateRequest();

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.isUpdating).toBe(true);
  });

  it(`THEN should work when passed ${BARS.BAR_CREATE_DOMAIN_SUCCESS}`, () => {
    // Arrange.
    const dateUpdated = Date.now();
    const barData = {
      id: "123456",
      contactEmail: "contact@mail.com",
      accStatement: "all ok",
      skipTo: "main",
      accPortal: "portal",
      theme: "Dark",
      domains: [
        {
          id: "123456",
          domain: "domain 001"
        }
      ]
    };
    const payload = {
      domain: "new domain"
    };

    initialState.bar.data = barData;

    const action = barsActions.barCreateDomainSuccess(payload);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.data.domains.length).toEqual(2);
    expect(newState.error).toBe(false);
    expect(newState.errorMessage).toBe(null);
    expect(newState.isFetching).toBe(false);
    expect(newState.updatedAt).toBeGreaterThanOrEqual(dateUpdated);
  });

  it(`THEN should work when passed ${BARS.BAR_UPDATE_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = barsActions.barUpdateFailed(error.message);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.error).toBe(true);
    expect(newState.errorMessage).toEqual(error.message);
    expect(newState.isFetching).toBe(false);
  });

  it(`THEN should work when passed ${BARS.BAR_DELETE_DOMAIN_BEGIN}`, () => {
    // Arrange.
    const action = barsActions.barUpdateRequest();

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.isUpdating).toBe(true);
  });

  it(`THEN should work when passed ${BARS.BAR_DELETE_DOMAIN_SUCCESS}`, () => {
    // Arrange.
    const dateUpdated = Date.now();
    const domainId = "123456";
    const barData = {
      id: "123456",
      contactEmail: "contact@mail.com",
      accStatement: "all ok",
      skipTo: "main",
      accPortal: "portal",
      theme: "Dark",
      domains: [
        {
          id: domainId,
          domain: "domain 001"
        }
      ]
    };

    initialState.bar.data = barData;

    const action = barsActions.barDeleteDomainSuccess(domainId);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.data.domains.length).toEqual(0);
    expect(newState.error).toBe(false);
    expect(newState.errorMessage).toBe(null);
    expect(newState.isFetching).toBe(false);
    expect(newState.updatedAt).toBeGreaterThanOrEqual(dateUpdated);
  });

  it(`THEN should work when passed ${BARS.BAR_DELETE_DOMAIN_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = barsActions.barUpdateFailed(error.message);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.error).toBe(true);
    expect(newState.errorMessage).toEqual(error.message);
    expect(newState.isFetching).toBe(false);
  });

  it(`THEN should work when passed ${BARS.BAR_STATS_BEGIN}`, () => {
    // Arrange.
    const action = barsActions.barStatsRequest();

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.isFetching).toBe(true);
  });

  it(`THEN should work when passed ${BARS.BAR_STATS_SUCCESS}`, () => {
    // Arrange.
    // const dateReceived = Date.now();
    const barData = {};

    const action = barsActions.barStatsSuccess(barData);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    // TODO: Review later when BE is implemented.
    // expect(newState.data).toEqual(barData);
    expect(newState.error).toBe(false);
    expect(newState.errorMessage).toBe(null);
    expect(newState.isFetching).toBe(false);
    // expect(newState.receivedAt).toBeGreaterThanOrEqual(dateReceived);
  });

  it(`THEN should work when passed ${BARS.BAR_STATS_FAILED}`, () => {
    // Arrange.
    const error = {
      message: "errorMessage"
    };
    const action = barsActions.barStatsFailed(error.message);

    // Act.
    const newState = bars(initialState.bar, action);

    // Assert.
    expect(newState.error).toBe(true);
    expect(newState.errorMessage).toEqual(error.message);
    expect(newState.isFetching).toBe(false);
  });
});
