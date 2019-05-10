import Service from "./service";
import { BAR_MODEL_API_ENDPOINT, USER_MODEL_API_ENDPOINT } from "./constants";

export function getBar(id) {
  const params = {
    id
  };

  return Service.get(BAR_MODEL_API_ENDPOINT, params);
}

export function getBarByCurrentUser() {
  return Service.get(`${USER_MODEL_API_ENDPOINT}/bars/settings`);
}

export function updateBar(id, bar) {
  return Service.put(BAR_MODEL_API_ENDPOINT, id, bar);
}

export function createBarDomain(barId, domain) {
  return Service.post(`${BAR_MODEL_API_ENDPOINT}/${barId}/domains`, domain);
}

export function deleteBarDomain(barId, domainId) {
  return Service.delete(
    `${BAR_MODEL_API_ENDPOINT}/${barId}/domains/${domainId}`
  );
}

export function getBarStats(barId) {
  return Service.get(`${BAR_MODEL_API_ENDPOINT}/${barId}/stats`);
}
