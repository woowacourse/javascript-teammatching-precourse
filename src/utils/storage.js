import { STORAGE_KEY } from '../constants/constants.js';
import Crew from '../model/crew.js';

export const setDataOnLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadDataFromLocalStorage = (key) => {
  const parsedData = JSON.parse(localStorage.getItem(key));

  if (!parsedData) return false;

  if (key === STORAGE_KEY.FRONT_CREWS || key === STORAGE_KEY.BACK_CREWS) {
    return parsedData.map(({ name }) => new Crew(name));
  }

  return parsedData;
};
