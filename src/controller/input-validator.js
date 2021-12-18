import { $ } from '../dom/constants.js';

export const crewUserInput = () => {
  const $userInputValue = $('#crew-name-input').value;

  return $userInputValue;
};

const clearUserInput = () => {
  const $userInputValue = $('#crew-name-input');

  $userInputValue.value = '';
};

export const crewNameValidator = (userInput) => {
  let isValid = false;
  if (userInput.length > 4) {
    alert('크루 이름은 최대 5글자 까지만 가능합니다.');
    clearUserInput();
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};
