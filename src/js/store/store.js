export const store = {
  getItem(key) {
    if (localStorage.getItem(key) === null) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key));
  },
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
