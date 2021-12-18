import { ERROR_MSG, MINUS_ERROR } from '../constants/errorConstants.js';
import showAlert from '../views/showAlert.js';

export default function checkUserInputMinus(userInput) {
  if (userInput < 0) {
    showAlert(ERROR_MSG[MINUS_ERROR]);
    return false;
  }
  return true;
}
