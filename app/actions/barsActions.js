import { BARS } from "./actionTypes";
import { logged } from "./sessionActions";
import * as barsService from "../services/barsService";
import { UNKNOWN_ERROR, NOTIFICATION_TIMEOUT } from "../resources/constants";

export function barRequest() {
  return {
    type: BARS.BAR_BEGIN
  };
}

export function barSuccess(bar) {
  return {
    type: BARS.BAR_SUCCESS,
    bar
  };
}

export function barFailed(error) {
  return {
    type: BARS.BAR_FAILED,
    message: error
  };
}

export function barUpdateRequest() {
  return {
    type: BARS.BAR_UPDATE_BEGIN
  };
}

export function barUpdateSuccess(bar) {
  return {
    type: BARS.BAR_UPDATE_SUCCESS,
    bar
  };
}

export function barUpdateFailed(error) {
  return {
    type: BARS.BAR_UPDATE_FAILED,
    message: error
  };
}

export function barCreateDomainRequest() {
  return {
    type: BARS.BAR_CREATE_DOMAIN_BEGIN
  };
}

export function barCreateDomainSuccess(domain) {
  return {
    type: BARS.BAR_CREATE_DOMAIN_SUCCESS,
    domain
  };
}

export function barCreateDomainFailed(error) {
  return {
    type: BARS.BAR_CREATE_DOMAIN_FAILED,
    message: error
  };
}

export function barDeleteDomainRequest() {
  return {
    type: BARS.BAR_DELETE_DOMAIN_BEGIN
  };
}

export function barDeleteDomainSuccess(domainId) {
  return {
    type: BARS.BAR_DELETE_DOMAIN_SUCCESS,
    domainId
  };
}

export function barDeleteDomainFailed(error) {
  return {
    type: BARS.BAR_DELETE_DOMAIN_FAILED,
    message: error
  };
}

export function barStatsRequest() {
  return {
    type: BARS.BAR_STATS_BEGIN
  };
}

export function barStatsSuccess(stats) {
  return {
    type: BARS.BAR_STATS_SUCCESS,
    stats
  };
}

export function barStatsFailed(error) {
  return {
    type: BARS.BAR_STATS_FAILED,
    message: error
  };
}

export function barReset() {
  return {
    type: BARS.BAR_RESET
  };
}

export function getBarByCurrentUser() {
  return function(dispatch) {
    dispatch(logged());
    dispatch(barRequest());
    return barsService
      .getBarByCurrentUser()
      .then(response => {
        const data = response.data || {};
        const bar = {
          id: data.id,
          contactEmail: data.contactEmail,
          accStatement: data.accStatement,
          skipTo: data.skipTo,
          accPortal: data.accPortal,
          theme: data.theme,
          domains: data.domains
        };
        dispatch(barSuccess(bar));
      })
      .catch(() => {
        dispatch(barFailed(UNKNOWN_ERROR));
      });
  };
}

export function updateBar(id, bar) {
  return function(dispatch) {
    dispatch(barUpdateRequest());
    return barsService
      .updateBar(id, bar)
      .then(response => {
        dispatch(barUpdateSuccess(response.data));
        reset(dispatch);
      })
      .catch(() => {
        dispatch(barUpdateFailed(UNKNOWN_ERROR));
        reset(dispatch);
      });
  };
}

export function createBarDomain(barId, domain) {
  return function(dispatch) {
    dispatch(barCreateDomainRequest());
    return barsService
      .createBarDomain(barId, domain)
      .then(response => {
        dispatch(barCreateDomainSuccess(response.data));
        reset(dispatch);
      })
      .catch(error => {
        const { response } = error;
        const message =
          response && response.data && response.data.message
            ? response.data.message
            : UNKNOWN_ERROR;

        dispatch(barCreateDomainFailed(message));
        reset(dispatch);
      });
  };
}

export function deleteBarDomain(barId, domainId) {
  return function(dispatch) {
    dispatch(barDeleteDomainRequest());
    return barsService
      .deleteBarDomain(barId, domainId)
      .then(() => {
        dispatch(barDeleteDomainSuccess(domainId));
        reset(dispatch);
      })
      .catch(() => {
        dispatch(barDeleteDomainFailed(UNKNOWN_ERROR));
        reset(dispatch);
      });
  };
}

export function getBarStats(barId) {
  return function(dispatch) {
    dispatch(barStatsRequest());
    return barsService
      .getBarStats(barId)
      .then(response => {
        const data = response.data || {};
        dispatch(barStatsSuccess(data));
      })
      .catch(() => {
        dispatch(barStatsFailed(UNKNOWN_ERROR));
      });
  };
}

function reset(dispatch) {
  setTimeout(() => {
    dispatch(barReset());
  }, NOTIFICATION_TIMEOUT);
}
