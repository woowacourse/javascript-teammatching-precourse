import { ERROR, DONE } from '../constants/constants.js';
import { isEmpty, isLength, isUniqueName } from '../utils/validation-tools.js';

export const crewNameVaildCheck = (name, crewList) => {
  if (isEmpty(name) === false) return ERROR.CREW_NAME_EMPTY;
  if (isLength(name, [1, 5]) === false) return ERROR.CREW_NAME_LENGTH;
  if (isUniqueName(crewList, name) === false) return ERROR.CREW_NAME_UNIQUE;

  return DONE.CREW_NAME_VAILD;
};
