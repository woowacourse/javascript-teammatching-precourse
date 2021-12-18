import { MESSAGE } from "./constant.js";

export const checkValidName = (crews, name) => {
  if (isDuplicatedName(crews, name)) {
    throw Error(MESSAGE.DUPLICATED_NAME);
  }
  if (isEmpty(name)) {
    throw Error(MESSAGE.NO_NAME_SPACE);
  }
  if (isOverValidLength(name)) {
    throw Error(MESSAGE.OVER_VALID_LENGTH);
  }
};

export const checkValidCount = (count) => {
  if (isNotPositiveCount(count)) {
    throw Error(MESSAGE.POSITIVE_COUNT);
  }
};

const isDuplicatedName = (crews, name) => {
  return crews.includes(name);
};

const isEmpty = (name) => {
  return name.length === 0;
};

const isOverValidLength = (name) => {
  return name.length > 5;
};

const isNotPositiveCount = (count) => {
  return count <= 0;
};
