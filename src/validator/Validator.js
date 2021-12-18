import {
  ERROR_MESSAGE,
} from '../constant/constant.js';

function isDuplicatedName(name, crews) {
  return !crews.find((crew) => crew.name === name);
}

function isOverFive(name) {
  const trimmed = name.trim();

  return trimmed.length > 5 || trimmed.length === 0;
}

export default class Validator {
  static IsValidCrewAdd(name, crews) {
    if (isDuplicatedName(name, crews) && isOverFive(name)) {
      alert(ERROR_MESSAGE.NAME_ERROR);
      return false;
    }
    return true;
  }
}
