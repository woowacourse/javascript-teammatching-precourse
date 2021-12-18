import { ERROR, LOCAL_DB, NUM } from '../constants/index.js';
import { getLocalStorage } from './localStorage.js';

const isCrewDuplicated = value => {
  const front = getLocalStorage(LOCAL_DB.CREW_FRONT);
  const back = getLocalStorage(LOCAL_DB.CREW_BACK);
  const allCrew = [...front, ...back];

  return allCrew.includes(value);
};

export const isValidCrewName = value => {
  if (value.length > NUM.MAX_CREW_NAME) {
    alert(ERROR.CREW_NAME_IS_LONG);
    return false;
  }

  if (isCrewDuplicated(value)) {
    alert(ERROR.CREW_IS_DUPLICATED);
    return false;
  }

  if (value.trim() === '') {
    alert(ERROR.CREW_NAME_IS_BLANK);
    return false;
  }

  return true;
};

export const isValidCount = (crewCount, matchCount) => {
  if (crewCount - matchCount < matchCount) {
    alert(ERROR.COUNT_IS_WRONG);

    return false;
  }

  return true;
};
