import { ERROR, RULE } from '../constants/constants.js';

function checkLength(name) {
  return !(name.length > RULE.MAX_LENGTH);
}

function checkDuplicate(name, crewNames) {
  const sameName = crewNames.find(crewName => crewName === name);
  return !sameName;
}

export function crewInputValid(crewName, crewNames) {
  if (!checkLength(crewName)) {
    return alert(ERROR.MAX_LENGTH);
  }
  if (!checkDuplicate(crewName, crewNames)) {
    return alert(ERROR.DUPLICATE);
  }
  return true;
}
