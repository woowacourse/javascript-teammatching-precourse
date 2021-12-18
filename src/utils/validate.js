import { ERROR_MESSAGE, LIMIT } from '../constant/constant.js';

export const isValidCrewName = (name, course) => {
  let validation = { valid: true, ERROR_MESSAGE: '' };
  if (!isNotNull(name)) {
    validation.valid = false;
    validation.ERROR_MESSAGE = ERROR_MESSAGE.CREW_NAME_MIN;
  }
  if (!isInLimit(name)) {
    validation.valid = false;
    validation.ERROR_MESSAGE = ERROR_MESSAGE.CREW_NAME_MAX;
  }
  if (!isNotDuplicate(name, course)) {
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

const isNotDuplicate = (name, course) => {
  console.log(course);
  return !course.crews.includes(name);
};
