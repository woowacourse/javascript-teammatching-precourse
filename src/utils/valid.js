import { ERROR, NUM } from '../constants/index.js';

export const isValidCrewName = value => {
  if (value.length > NUM.MAX_CREW_NAME) {
    alert(ERROR.CREW_NAME_IS_LONG);
    return false;
  }

  return true;
};
