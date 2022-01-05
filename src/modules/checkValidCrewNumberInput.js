import { ERROR_MSG, OVER_ERROR } from '../constants/errorConstants.js';
import store from '../store/store.js';
import showAlert from '../views/showAlert.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkUserINputInteger from './checkUserInputInteger.js';
import checkUserInputMinus from './checkUserInputMinus.js';

function checkCrewNumberNotOver(crewNumInput, courseName) {
  const courseStorage = store.getLocalStorage(courseName);
  if (crewNumInput > courseStorage.length) {
    showAlert(ERROR_MSG[OVER_ERROR]);
    return false;
  }
  return true;
}

export default function checkValidCrewNumberInput(crewNumInput, courseName) {
  let isTrue = false;
  if (checkUserInputEmpty(crewNumInput)) {
    isTrue = checkUserINputInteger(crewNumInput);
  }
  if (isTrue) {
    isTrue = checkUserInputMinus(crewNumInput);
  }
  isTrue = checkCrewNumberNotOver(crewNumInput, courseName);
  return isTrue;
}
