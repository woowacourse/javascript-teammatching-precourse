import { ERROR_MESSAGE, LIMIT } from '../constant/constant.js';

export const isValidCrewName = (name, crews) => {
  console.log(name, crews);
  let validation = { valid: true, ERROR_MESSAGE: '' };
  if (!isNotNull(name)) {
    validation.valid = false;
    validation.ERROR_MESSAGE = ERROR_MESSAGE.CREW_NAME_MIN;
  }
  if (!isInLimit(name)) {
    validation.valid = false;
    validation.ERROR_MESSAGE = ERROR_MESSAGE.CREW_NAME_MAX;
  }
  if (!isNotDuplicate(name, crews)) {
    validation.valid = false;
    validation.ERROR_MESSAGE = ERROR_MESSAGE.CREW_NAME_DUPLICATE;
  }
  return validation;
};

const isNotNull = (input) => {
  return input != '';
};

const isInLimit = (input) => {
  return LIMIT.NAME_MAX_LENGTH >= input.length;
};

const isNotDuplicate = (name, crews) => {
  return !crews.includes(name);
};
