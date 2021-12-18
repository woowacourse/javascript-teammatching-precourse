import { MIN_CREW_NAME, MAX_CREW_NAME, ERROR_MESSAGE } from '../constants/condition.js';

const notSpaceBeforeOrAfter = (value) => {
  if (value.length !== value.trim().length) return alert(ERROR_MESSAGE.CREW_NAME.SPACE);
  return true;
};

const isValidCrewNameLength = (name) => {
  if (MIN_CREW_NAME > name.length) return alert(ERROR_MESSAGE.CREW_NAME.MIN_LENGTH);
  if (MAX_CREW_NAME < name.length) return alert(ERROR_MESSAGE.CREW_NAME.MAX_LENGTH);
  return true;
};

const isNotDuplicatedName = (nameToFind, crew) => {
  const result = crew.findIndex((crewName) => crewName === nameToFind);
  if (result !== -1) return alert(ERROR_MESSAGE.CREW_NAME.DUPLICATED);
  return true;
};

const isPositiveInteger = (count) => {
  if (!Number.isInteger(count) || count <= 0) {
    return alert(ERROR_MESSAGE.MEMBER_COUNT.POSITIVE_INTEGER);
  }
  return true;
};

const isSmallerThanTotalCrewNumber = (count, crew) => {
  if (count > crew.length) return alert(ERROR_MESSAGE.MEMBER_COUNT.MAX_COUNT);
  return true;
};

function isValidCrewName(name, crew) {
  return isValidCrewNameLength(name)
    && notSpaceBeforeOrAfter(name)
    && isNotDuplicatedName(name, crew);
}

function isValidTeamMemberCount(count, crew) {
  return isPositiveInteger(count)
    && isSmallerThanTotalCrewNumber(count, crew);
}

export {
  isValidCrewName,
  isValidTeamMemberCount,
};
