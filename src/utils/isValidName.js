import { ERROR_MESSAGE } from '../constants.js';

const isValidName = (name, crewManager) => {
  if (!name.length || name.length > 5 || crewManager.isExistName(name)) {
    alert(ERROR_MESSAGE.invalidName);
    return false;
  }

  return true;
};

export default isValidName;
