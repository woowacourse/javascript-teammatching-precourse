import { MESSAGE } from '../../constants.js';

export const validateTeamNumberNull = number =>
  number ? true : alert(MESSAGE.teamNumberHaveToRequired);
