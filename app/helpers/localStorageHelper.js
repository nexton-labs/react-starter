/* global localStorage */
export const getParsedItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    // TODO: Log.
    // Unable to parse the string, probably related to
    // an invalid value or state in the Local Storage.
    return null;
  }
};

export const getItem = key => {
  return localStorage && localStorage.getItem(key);
};

export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeItem = key => {
  localStorage.removeItem(key);
};
