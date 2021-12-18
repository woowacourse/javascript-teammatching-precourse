import checkUserInputDuplicate from './checkUserInputDuplicate.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkUserInputLengthLimit from './checkUserInputLengthLimit.js';

export default function checkValidCrewNameInput(crewNameInput, courseType) {
  let isTrue = false;
  if (checkUserInputEmpty(crewNameInput)) {
    isTrue = checkUserInputDuplicate(crewNameInput, courseType);
  }
  if (isTrue) {
    isTrue = checkUserInputLengthLimit(crewNameInput);
  }
  return isTrue;
}
