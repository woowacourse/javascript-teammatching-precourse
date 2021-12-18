import { CREW_NAME_LIMIT } from '../constants/constants.js';
import { ERROR_MSG, LENGTH_LIMIT_ERROR } from '../constants/errorConstants.js';
import showAlert from '../views/showAlert.js';

export default function checkUserInputLengthLimit(userinput) {
  if (userinput.length > CREW_NAME_LIMIT) {
    showAlert(ERROR_MSG[LENGTH_LIMIT_ERROR]);
    return false;
  }
  return true;
}
