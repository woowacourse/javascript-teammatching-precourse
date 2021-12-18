import {
  noInputException,
  duplicatedCrewException,
  outRangeName,
  littleMemberCountException,
  outRangeMemberCountException,
  noIntegerException,
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

export const getMemberCountInput = () => {
  const numberCountInput = document.getElementById(
    'team-member-count-input'
  ).value;

  if (
    noInputException(numberCountInput) ||
    littleMemberCountException(Number(numberCountInput)) ||
    outRangeMemberCountException(Number(numberCountInput)) ||
    noIntegerException(Number(numberCountInput))
  ) {
    return null;
  }

  return Number(numberCountInput);
};
