import { CREW_NAME_MAX, ERROR_MESSAGE } from '../data/constants.js';
import Validator from '../utils/validator.js';

export const getCrewInputErrorMessage = (crewList, name) => {
  if (crewList === undefined) {
    return ERROR_MESSAGE.CHOOSE_COURSE;
  }

  if (Validator.isEmpty) {
    return ERROR_MESSAGE.EMPTY_INPUT;
  }

  if (!Validator.isShorter(name.length, CREW_NAME_MAX)) {
    return ERROR_MESSAGE.MAX_LENGTH_ERROR;
  }

  if (Validator.isDuplicated(crewList, name)) {
    console.log(crewList, name);
    return ERROR_MESSAGE.DUPLICATED_NAME;
  }

  return null;
};
