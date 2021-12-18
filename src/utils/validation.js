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
  if (crews && crews[course]) {
    return crews[course].includes(inputValue);
  }

  return false;
};

export const isInputNotPositive = (inputValue) => {
  return inputValue <= 0;
};

export const isInputNotInteger = (inputValue) => {
  return isNaN(inputValue) || !Number.isInteger(inputValue);
};

export const isInputMoreThanTeamHeadCount = (inputValue, crewLength) => {
  return inputValue > Number.parseInt(crewLength / inputValue, 10);
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

export const isValidTeamHeadCount = (inputValue, crewLength) => {
  inputValue = Number.parseInt(inputValue, 10);

  if (isInputEmpty(inputValue)) {
    alert(ERROR_MESSAGE.EMPTY);
    return false;
  }
  if (isInputNotInteger(inputValue) || isInputNotPositive(inputValue)) {
    alert(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    return false;
  }
  if (isInputMoreThanTeamHeadCount(inputValue, crewLength)) {
    alert(ERROR_MESSAGE.NOT_VALID_HEADCOUNT);
    return false;
  }
  return true;
};
