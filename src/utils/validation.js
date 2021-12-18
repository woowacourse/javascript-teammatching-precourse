import { ERROR_MESSAGE, NAME_LENGTH } from './constants.js';
import { getLocalStorage } from './storage.js';

const isExistStation = (storedCrew, inputName) => {
  return storedCrew.includes(inputName);
};

const isBlank = (inputName) => {
  return inputName.length < NAME_LENGTH.MIN;
};
const isValidLength = (inputName) => {
  return inputName.length > NAME_LENGTH.MAX;
};

export const isValidInputName = (name, inputName) => {
  const storedCrew = getLocalStorage(name);

  if (isValidLength(inputName)) {
    return alert(ERROR_MESSAGE.NAME_TOO_LONG);
  }
  if (isBlank(inputName)) {
    return alert(ERROR_MESSAGE.CANNOT_BE_BLANK);
  }
  if (isExistStation(storedCrew, inputName)) {
    return alert(ERROR_MESSAGE.CAN_NOT_OVERLAP);
  }
  return true;
};
