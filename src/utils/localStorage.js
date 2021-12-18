export const setStateToLocalStorage = (state) => {
  setLocalStorage('front', state.front);
  setLocalStorage('back', state.back);
  setLocalStorage('mission', state.mission);
};

export const getStateFromLocalStorage = () => {
  const front = getLocalStorage('front') || [];
  const back = getLocalStorage('back') || [];
  const mission = getLocalStorage('mission') || [];
  return { front, back, mission };
};

const setLocalStorage = (key, item) => {
  return localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
