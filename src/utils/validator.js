import { USER_INPUT_ALERT, MAX_NAME_LENGTH } from './constant.js';

export const NameInputCheckMethods = [
  // 빈칸 및 공백 입력 금지
  (value) => {
    const isFilled = value.trim() !== '';
    if (!isFilled) {
      alert(USER_INPUT_ALERT.blankNameError);
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
