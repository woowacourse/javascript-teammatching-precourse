import { MESSAGE } from '../../constants.js';

export const validateMemberNameNull = name => (name ? true : alert(MESSAGE.crewNameIsRequired));

export const validateMemberNameUnique = (name, members) =>
  members.find(member => member.name === name) ? alert(MESSAGE.crewNameHaveToUnique) : true;

export const validateMemberNameUnderFiveLetter = name =>
  name.length > 5 ? alert(MESSAGE.crewNameHaveToUnderFiveLetter) : true;
