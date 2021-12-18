import { STORAGE_KEY, ERROR_MESSAGE } from './constants.js';
import { getLocalStorage } from './localStorage.js';

export const isInputEmpty = (inputValue) => {
  return inputValue.length < 1;
};

export const isMoreThanNameLength = (inputValue) => {
  return inputValue.length > 5;
};

export const isDuplicatedName = (inputValue, course) => {
  const crews = getLocalStorage(STORAGE_KEY.CREW);
  if (crews[course]) {
    return crews[course].includes(inputValue);
  }

  return false;
};

export const isValidCrewName = (inputValue, course) => {
  if (isInputEmpty(inputValue)) {
    alert(ERROR_MESSAGE.EMPTY);
    return false;
  }
  if (isMoreThanNameLength(inputValue)) {
    alert(ERROR_MESSAGE.OUT_OF_RANGE);
    return false;
  }
  if (isDuplicatedName(inputValue, course)) {
    alert(ERROR_MESSAGE.DUPLICATED_NAME);
    return false;
  }

  return true;
};
