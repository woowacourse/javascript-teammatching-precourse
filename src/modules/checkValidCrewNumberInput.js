import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkUserINputInteger from './checkUserInputInteger.js';
import checkUserInputMinus from './checkUserInputMinus.js';

export default function checkValidCrewNumberInput(crewNumInput) {
  let isTrue = false;
  if (checkUserInputEmpty(crewNumInput)) {
    isTrue = checkUserINputInteger(crewNumInput);
  }
  if (isTrue) {
    isTrue = checkUserInputMinus(crewNumInput);
  }
  return isTrue;
}
