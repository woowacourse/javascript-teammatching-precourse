import { COURSE, DOM, ERROR_MESSAGE, PLAIN_TEXT } from './constants.js';

export const $ = (id) => document.getElementById(id);

export const isCourseSectionMounted = (courseName) => courseName !== PLAIN_TEXT;

export const isCourseFrontend = (courseName) => courseName === COURSE.FRONTEND;
export const isCourseBackend = (courseName) => courseName === COURSE.BACKEND;
export const isNoneInput = (str) => {
  return str.length === 0;
};
export const isDuplicatedName = (name, list) => {
  return list.find((crew) => crew.name === name);
};
export const isStringGreatherThan5 = (str) => {
  return str.length > 5;
};
export const isValidCrewName = (name, list) => {
  if (isNoneInput(name)) {
    throw new Error(ERROR_MESSAGE.IS_NONE_INPUT);
  }
  if (isDuplicatedName(name, list)) {
    throw new Error(ERROR_MESSAGE.IS_DUPLICATED_NAME);
  }
  if (isStringGreatherThan5(name)) {
    throw new Error(ERROR_MESSAGE.IS_STRING_GREATHER_THAN_5);
  }
  return true;
};

export const isDeleteButtonClick = (className) => {
  return className === DOM.DELETE_CREW_BUTTON_CLASSNAME;
};
export const isCountZero = (count) => {
  return count === 0;
};
export const isCountNegativeNumber = (count) => {
  return count < 0;
};
export const isValidCount = (count) => {
  if (isCountZero(count)) {
    throw new Error(ERROR_MESSAGE.IS_COUNT_ZERO);
  }
  if (isCountNegativeNumber(count)) {
    throw new Error(ERROR_MESSAGE.IS_COUNT_NEGATIVE_NUMBER);
  }
  return true;
};
