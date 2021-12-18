export const setDataOnLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadDataFromLocalStorage = (key) => {
  const parsedData = JSON.parse(localStorage.getItem(key));

  if (!parsedData) return false;

  // if (key === STORAGE_KEY.COINS) {
  //   return parsedData.map(({ unit, amount }) => new Coin(unit, amount));
  // }

  return parsedData;
};
