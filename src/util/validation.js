import { crew } from "../component/crew.js";
import { ERROR_MESSAGE, NAME_LENGTH } from "./constant.js";

const checkIsNull = input => {
  if (input === "") {
    alert(ERROR_MESSAGE.isNull);
    return true;
  }
};

const checkIsDuplicateInFrontEnd = input => {
  if (crew.frontEndMembers.includes(input)) {
    alert(ERROR_MESSAGE.isDuplicate);
    return true;
  }
};

const checkIsDuplicateInBackEnd = input => {
  if (crew.backEndMembers.includes(input)) {
    alert(ERROR_MESSAGE.isDuplicate);
    return true;
  }
};

const checkIsOverFiveLength = input => {
  if (input.length > NAME_LENGTH) {
    alert(ERROR_MESSAGE.inOverFiveLength);
    return true;
  }
};

export const checkFrontEndCrewInput = input => {
  let isValid = true;

  if (checkIsNull(input)) {
    isValid = false;
  } else if (checkIsDuplicateInFrontEnd(input)) {
    isValid = false;
  } else if (checkIsOverFiveLength(input)) {
    isValid = false;
  }

  return isValid;
};

export const checkBackEndCrewInput = input => {
  let isValid = true;

  if (checkIsNull(input)) {
    isValid = false;
  } else if (checkIsDuplicateInBackEnd(input)) {
    isValid = false;
  } else if (checkIsOverFiveLength(input)) {
    isValid = false;
  }

  return isValid;
};
