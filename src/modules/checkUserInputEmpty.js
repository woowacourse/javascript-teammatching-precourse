import { EMPTY_ERROR, ERROR_MSG } from '../constants/errorConstants.js';
import showAlert from '../views/showAlert.js';

export default function checkUserInputEmpty(userInput) {
  if (userInput === '') {
    showAlert(ERROR_MSG[EMPTY_ERROR]);
    return false;
  }
  return true;
}
