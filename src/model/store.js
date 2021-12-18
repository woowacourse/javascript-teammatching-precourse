export const store = {
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

export const feCrewList = store.getLocalStorage('feCrewList') ?? [];
export const beCrewList = store.getLocalStorage('beCrewList') ?? [];
