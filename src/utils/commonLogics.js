export const getLocalStorage = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return [];
  return JSON.parse(loaded);
};
export const getLocalStorage__Choice = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return;
  return JSON.parse(loaded);
};
export const getLocalStorage__Boolean = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return false;
  return JSON.parse(loaded);
};

export const setLocalStorage = (LS_KEY, value) => {
  localStorage.setItem(LS_KEY, JSON.stringify(value));
};
