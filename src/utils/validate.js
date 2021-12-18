import { MINIMUN_LEN_NAME } from '../constants/number.js';
import { ERROR } from '../constants/text.js';

const isEmpty = (text) => text === '';

const isDuplicated = (name, list) => list.includes(name);

const isOverLength = (name) => name.length > MINIMUN_LEN_NAME;

export function validateName(name, list) {
  if (isEmpty(name)) {
    return ERROR.NO_NAME;
  }
  if (isDuplicated(name, list)) {
    return ERROR.DUPLICATED_NAME;
  }
  if (isOverLength(name)) {
    return ERROR.OVER_LENGTH;
  }
  return undefined;
}
