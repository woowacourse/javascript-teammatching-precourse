import { ERROR_MESSAGE, NAME_LENGTH } from './constants.js';

const isBlank = (inputName) => {
  return inputName.length < NAME_LENGTH.MIN;
};
const isValidLength = (inputName) => {
  return inputName.length > NAME_LENGTH.MAX;
};

export const isValidInputName = (inputName) => {
  if (isValidLength(inputName)) {
    return alert(ERROR_MESSAGE.NAME_TOO_LONG);
  }
  if (isBlank(inputName)) {
    return alert(ERROR_MESSAGE.CANNOT_BE_BLANK);
  }
  return true;
};
