import { ERROR, RULE } from '../constants/constants.js';

function checkLength(name) {
  return !(name.length > RULE.MAX_LENGTH);
}

function checkDuplicate(name, crewNames) {
  const sameName = crewNames.find(crewName => crewName.name === name);
  return !sameName;
}

export function crewInputValid(crewName, crewNames) {
  if (!checkLength(crewName.name)) {
    return alert(ERROR.MAX_LENGTH);
  }
  if (!checkDuplicate(crewName.name, crewNames)) {
    return alert(ERROR.DUPLICATE);
  }
  return true;
}
