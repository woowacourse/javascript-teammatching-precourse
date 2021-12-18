import {
  noInputException,
  duplicatedCrewException,
  outRangeName,
} from './exception.js';

export const getCrewNameInput = () => {
  const nameInput = document.getElementById('crew-name-input').value;

  if (
    noInputException(nameInput) ||
    outRangeName(nameInput) ||
    duplicatedCrewException(nameInput)
  ) {
    return null;
  }

  return nameInput;
};
