/* eslint-disable no-alert */
import { RULE, MESSAGE } from '../constant/error.js';

export const isValidLength = (name) => {
  if (RULE.MIN_LENGTH > name.length || name.length > RULE.MAX_LENGTH) {
    alert(MESSAGE.LENGTH);
    return false;
  }

  return true;
};

export const isUniqueName = (name, crewList) => {
  if (crewList.includes(name)) {
    alert(MESSAGE.NOT_UNIQUE);
    return false;
  }

  return true;
};
