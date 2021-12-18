import { NAME_KEY } from '../constants/constants.js';
import { DUPLICATE_ERROR, ERROR_MSG } from '../constants/errorConstants.js';
import store from '../store/store.js';
import showAlert from '../views/showAlert.js';

function checkCrewNameWithStorage(userInput, storageList) {
  let isTrue = true;
  storageList.forEach((item) => {
    if (item[NAME_KEY] === userInput) {
      isTrue = false;
    }
  });
  return isTrue;
}

export default function checkUserInputDuplicate(userInput, storeName) {
  const crewNameStorage = store.getLocalStorage(storeName);
  if (crewNameStorage) {
    if (checkCrewNameWithStorage(userInput, crewNameStorage)) {
      return true;
    } else {
      showAlert(ERROR_MSG[DUPLICATE_ERROR]);
      return false;
    }
  } else {
    return true;
  }
}
