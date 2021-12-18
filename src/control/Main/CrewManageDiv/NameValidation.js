import { CREW, MESSAGE } from '../../../common/constant.js';
import { $ } from '../../../common/element.js';
import { getLocalStorageArray } from '../../../common/localStorage.js';

function getCrewNames() {
  const crews = getLocalStorageArray('crew');
  const crewNames = [];
  crews.forEach((crew) => crewNames.push(crew.name));

  return crewNames;
}

export function checkInputValidation() {
  const name = $('crew-name-input').value;
  const crewNames = getCrewNames();

  if (!name) {
    alert(MESSAGE.NULL);
  } else if (name.length > CREW.CREW_NAME_MAX) {
    alert(MESSAGE.TOO_LONG);
  }
  if (crewNames.includes(name)) {
    alert(MESSAGE.DUPLICATE);
  }
}

export function getInputValidation() {
  const name = $('crew-name-input').value;
  const crewNames = getCrewNames();

  if (!name) {
    return false;
  }
  if (name.length > CREW.CREW_NAME_MAX) {
    return false;
  }
  if (crewNames.includes(name)) {
    return false;
  }
  return true;
}
