import { USER_INPUT_ALERT, MAX_NAME_LENGTH } from './constant.js';

export const NameInputCheckMethods = [
  (value) => {
    const isFilled = value.trim() !== '';
    if (!isFilled) {
      alert(USER_INPUT_ALERT.blankError);
    }
    return isFilled;
  },
  (value) => {
    const isLongValue = value.length > MAX_NAME_LENGTH;
    if (isLongValue) {
      alert(USER_INPUT_ALERT.longNameError);
    }
    return !isLongValue;
  },
];

export function isNameInputValid(value) {
  return NameInputCheckMethods.every((NameInputCheckMethod) => NameInputCheckMethod(value));
}

export const HeadCountInputCheckMethods = [
  (value) => {
    const isNaturalNumber = Number(value) >= 1 && parseInt(value) === Number(value);
    if (!isNaturalNumber) {
      alert(USER_INPUT_ALERT.notNaturalNumberError);
    }
    return isNaturalNumber;
  },
  (value) => {
    const isFilled = value.trim() !== '';
    if (!isFilled) {
      alert(USER_INPUT_ALERT.blankError);
    }
    return isFilled;
  },
];

export function isHeadCountInputValid(value) {
  return HeadCountInputCheckMethods.every((HeadCountInputCheckMethod) =>
    HeadCountInputCheckMethod(value),
  );
}
