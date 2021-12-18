export const getLocalStorage = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return [];
  return JSON.parse(loaded);
};
export const getLocalStorage__Coice = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return '0';
  return JSON.parse(loaded);
};

export const setLocalStorage = (LS_KEY, value) => {
  localStorage.setItem(LS_KEY, JSON.stringify(value));
};
