import { ERROR_MSG, NOT_INTEGER_ERROR } from '../constants/errorConstants.js';
import showAlert from '../views/showAlert.js';

export default function checkUserINputInteger(userInput) {
  if (Number.isInteger(Number(userInput))) {
    return true;
  }
  showAlert(ERROR_MSG[NOT_INTEGER_ERROR]);
  return false;
}
