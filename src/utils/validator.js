import { ERROR_MESSAGE, NUMBER } from '../constants/constants.js';
import { setErrorMessage } from './error.js';

const isNull = (value) => {
  return value === null || value === undefined;
};

const isEmpty = (value) => {
  if (isNull(value)) return true;
  if (typeof value === 'number') return value === 0;
  if (value instanceof Array) return value.length < 1 || value === [];

  return value.trim() === '';
};

const isBelowGivenLength = (value, givenLength) => {
  return value.length <= givenLength;
};

const isPositiveInteger = (value) => {
  return value >= 1;
};

const isBelowGivenNum = (value, givenNum) => {
  return value <= givenNum;
};

export const isValidCrewName = (name, course, model) => {
  if (isEmpty(name)) return setErrorMessage(ERROR_MESSAGE.NO_EMPTY_ALLOWED);
  if (!isBelowGivenLength(name, NUMBER.MAX_CREW_NAME_LENGTH) || model.isCrewExist(name, course))
    return setErrorMessage(ERROR_MESSAGE.NOT_PROPER_CREW_NAME);

  return true;
};

export const isValidMemberCount = (memberCount, crewsNum) => {
  console.log(crewsNum);
  if (
    isEmpty(memberCount) ||
    !isPositiveInteger(memberCount) ||
    !isBelowGivenNum(memberCount, crewsNum)
  )
    return setErrorMessage(ERROR_MESSAGE.NOT_PROPER_MEMBER_COUNT);

  return true;
};
