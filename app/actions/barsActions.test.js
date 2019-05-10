import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { BARS } from "./actionTypes";
import * as barsActions from "./barsActions";
import * as barsService from "../services/barsService";
import { UNKNOWN_ERROR } from "../resources/constants";

jest.mock("../services/barsService");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  barsService.getBar.mockReset();
  barsService.updateBar.mockReset();
  barsService.createBarDomain.mockReset();
  barsService.deleteBarDomain.mockReset();
  barsService.getBarStats.mockReset();
});

describe("GIVEN Bars Actions", () => {
  describe("GIVEN Get Bar", () => {
    describe("WHEN getBarByCurrentUser() action is call with correct params", () => {
      let requestAction;
      let successAction;
      const barResponse = {
        data: {
          id: "123456",
          contactEmail: "email",
          accStatement: "acc statement",
          skipTo: "#main",
          accPortal: "portal",
          theme: "Dark",
          domains: []
        }
      };

      const getBarsServiceSpy = jest.spyOn(barsService, "getBarByCurrentUser");
      const expectedBarResponse = {
        ...barResponse
      };

      beforeAll(() => {
        barsService.getBarByCurrentUser.mockImplementation(() =>
          Promise.resolve(barResponse)
        );

        const store = mockStore({});

        return store.dispatch(barsActions.getBarByCurrentUser()).then(() => {
          const actions = store.getActions();
          requestAction = actions[2];
          successAction = actions[3];
        });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_BEGIN} and ${
        BARS.BAR_SUCCESS
      }`, () => {
        expect(getBarsServiceSpy).toHaveBeenCalledTimes(1);

        expect(requestAction).toEqual({
          type: BARS.BAR_BEGIN
        });

        expect(successAction).toEqual({
          type: BARS.BAR_SUCCESS,
          bar: expectedBarResponse.data
        });
      });
    });

    describe("WHEN getBarByCurrentUser() action is call with bad endpoint called", () => {
      let actions;

      beforeAll(() => {
        barsService.getBarByCurrentUser.mockImplementation(() =>
          Promise.reject(new Error("Mocked Error"))
        );

        const store = mockStore({});

        return store.dispatch(barsActions.getBarByCurrentUser()).then(() => {
          actions = store.getActions();
        });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_BEGIN} and ${
        BARS.BAR_FAILED
      }`, () => {
        expect(actions[2]).toEqual({
          type: BARS.BAR_BEGIN
        });
        expect(actions[3]).toEqual({
          type: BARS.BAR_FAILED,
          message: UNKNOWN_ERROR
        });
      });
    });
  });

  describe("GIVEN Update Bar", () => {
    describe("WHEN updateBar() action is call with correct params", () => {
      let requestAction;
      let successAction;

      const updateBarsServiceSpy = jest.spyOn(barsService, "updateBar");

      beforeAll(() => {
        const bar = {
          id: "123456",
          contactEmail: "contact",
          accStatement: "acc",
          backTo: "main",
          accPortal: "portal"
        };

        barsService.updateBar.mockImplementation(() => Promise.resolve(bar));

        const store = mockStore({});

        return store.dispatch(barsActions.updateBar(bar.id, bar)).then(() => {
          const actions = store.getActions();
          requestAction = actions[0];
          successAction = actions[1];
        });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_UPDATE_BEGIN} and ${
        BARS.BAR_UPDATE_SUCCESS
      } when updateBar() action is call with correct params`, () => {
        expect(requestAction).toEqual({
          type: BARS.BAR_UPDATE_BEGIN
        });

        expect(updateBarsServiceSpy).toHaveBeenCalledTimes(1);
        expect(successAction).toEqual({
          type: BARS.BAR_UPDATE_SUCCESS
        });
      });
    });

    describe("WHEN updateBar() action is call with bad endpoint called", () => {
      let requestAction;
      let errorAction;

      beforeAll(() => {
        const bar = {
          id: "123456"
        };

        barsService.updateBar.mockImplementation(() =>
          Promise.reject(new Error("Mocked Error"))
        );

        const store = mockStore({});

        return store.dispatch(barsActions.updateBar(bar.id, bar)).then(() => {
          const actions = store.getActions();
          requestAction = actions[0];
          errorAction = actions[1];
        });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_UPDATE_BEGIN} and ${
        BARS.BAR_UPDATE_FAILED
      }`, () => {
        expect(requestAction).toEqual({
          type: BARS.BAR_UPDATE_BEGIN
        });

        expect(errorAction).toEqual({
          type: BARS.BAR_UPDATE_FAILED,
          message: UNKNOWN_ERROR
        });
      });
    });
  });

  describe("GIVEN Create Bar Domain", () => {
    describe("WHEN createBarDomain() action is call with correct params", () => {
      let requestAction;
      let successAction;

      const updateBarsServiceSpy = jest.spyOn(barsService, "createBarDomain");

      beforeAll(() => {
        const payload = { domain: "domain A" };
        const barId = "123456";
        const response = {
          ...payload
        };
        barsService.createBarDomain.mockImplementation(() =>
          Promise.resolve(response)
        );

        const store = mockStore({});

        return store
          .dispatch(barsActions.createBarDomain(barId, payload))
          .then(() => {
            const actions = store.getActions();
            requestAction = actions[0];
            successAction = actions[1];
          });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_CREATE_DOMAIN_BEGIN} and ${
        BARS.BAR_CREATE_DOMAIN_SUCCESS
      } when createBarDomain() action is call with correct params`, () => {
        expect(requestAction).toEqual({
          type: BARS.BAR_CREATE_DOMAIN_BEGIN
        });

        expect(updateBarsServiceSpy).toHaveBeenCalledTimes(1);
        expect(successAction).toEqual({
          type: BARS.BAR_CREATE_DOMAIN_SUCCESS
        });
      });
    });

    describe("WHEN createBarDomain() action is call with bad endpoint called", () => {
      let requestAction;
      let errorAction;

      beforeAll(() => {
        const barId = "123456";
        const payload = {};

        barsService.createBarDomain.mockImplementation(() =>
          Promise.reject(new Error("Mocked Error"))
        );

        const store = mockStore({});

        return store
          .dispatch(barsActions.createBarDomain(barId, payload))
          .then(() => {
            const actions = store.getActions();
            requestAction = actions[0];
            errorAction = actions[1];
          });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_CREATE_DOMAIN_BEGIN} and ${
        BARS.BAR_CREATE_DOMAIN_FAILED
      }`, () => {
        expect(requestAction).toEqual({
          type: BARS.BAR_CREATE_DOMAIN_BEGIN
        });

        expect(errorAction).toEqual({
          type: BARS.BAR_CREATE_DOMAIN_FAILED,
          message: UNKNOWN_ERROR
        });
      });
    });
  });

  describe("GIVEN Delete Bar Domain", () => {
    describe("WHEN deleteBarDomain() action is call with correct params", () => {
      let requestAction;
      let successAction;

      const updateBarsServiceSpy = jest.spyOn(barsService, "deleteBarDomain");
      const domainId = "1001";

      beforeAll(() => {
        const barId = "123456";
        barsService.deleteBarDomain.mockImplementation(() => Promise.resolve());

        const store = mockStore({});

        return store
          .dispatch(barsActions.deleteBarDomain(barId, domainId))
          .then(() => {
            const actions = store.getActions();
            requestAction = actions[0];
            successAction = actions[1];
          });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_DELETE_DOMAIN_BEGIN} and ${
        BARS.BAR_DELETE_DOMAIN_SUCCESS
      } when deleteBarDomain() action is call with correct params`, () => {
        expect(requestAction).toEqual({
          type: BARS.BAR_DELETE_DOMAIN_BEGIN
        });

        expect(updateBarsServiceSpy).toHaveBeenCalledTimes(1);
        expect(successAction).toEqual({
          type: BARS.BAR_DELETE_DOMAIN_SUCCESS,
          domainId
        });
      });
    });

    describe("WHEN deleteBarDomain() action is call with bad endpoint called", () => {
      let requestAction;
      let errorAction;

      beforeAll(() => {
        const barId = "123456";
        const domainId = "1000";

        barsService.deleteBarDomain.mockImplementation(() =>
          Promise.reject(new Error("Mocked Error"))
        );

        const store = mockStore({});

        return store
          .dispatch(barsActions.deleteBarDomain(barId, domainId))
          .then(() => {
            const actions = store.getActions();
            requestAction = actions[0];
            errorAction = actions[1];
          });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_DELETE_DOMAIN_BEGIN} and ${
        BARS.BAR_DELETE_DOMAIN_FAILED
      }`, () => {
        expect(requestAction).toEqual({
          type: BARS.BAR_DELETE_DOMAIN_BEGIN
        });

        expect(errorAction).toEqual({
          type: BARS.BAR_DELETE_DOMAIN_FAILED,
          message: UNKNOWN_ERROR
        });
      });
    });
  });

  describe("GIVEN Get Bar Stats", () => {
    describe("WHEN getBarStats() action is call with correct params", () => {
      let requestAction;
      let successAction;
      const barResponse = {
        data: {}
      };

      const getBarsServiceSpy = jest.spyOn(barsService, "getBarStats");
      const expectedBarResponse = {
        ...barResponse
      };

      beforeAll(() => {
        barsService.getBarStats.mockImplementation(() =>
          Promise.resolve(barResponse)
        );

        const store = mockStore({});

        return store.dispatch(barsActions.getBarStats()).then(() => {
          const actions = store.getActions();
          requestAction = actions[0];
          successAction = actions[1];
        });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_STATS_BEGIN} and ${
        BARS.BAR_STATS_SUCCESS
      }`, () => {
        expect(getBarsServiceSpy).toHaveBeenCalledTimes(1);

        expect(requestAction).toEqual({
          type: BARS.BAR_STATS_BEGIN
        });

        expect(successAction).toEqual({
          type: BARS.BAR_STATS_SUCCESS,
          stats: expectedBarResponse.data
        });
      });
    });

    describe("WHEN getBarStats() action is call with bad endpoint called", () => {
      let actions;

      beforeAll(() => {
        barsService.getBarStats.mockImplementation(() =>
          Promise.reject(new Error("Mocked Error"))
        );

        const store = mockStore({});

        return store.dispatch(barsActions.getBarStats()).then(() => {
          actions = store.getActions();
        });
      });

      it(`THEN should be able to dispatch ${BARS.BAR_STATS_BEGIN} and ${
        BARS.BAR_STATS_FAILED
      }`, () => {
        expect(actions[0]).toEqual({
          type: BARS.BAR_STATS_BEGIN
        });
        expect(actions[1]).toEqual({
          type: BARS.BAR_STATS_FAILED,
          message: UNKNOWN_ERROR
        });
      });
    });
  });
});
