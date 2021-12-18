import { ALERT_MESSAGE } from '../constants/constants.js';

export const $ = id => document.getElementById(id);

export const validation = {
  isCrewNameValid(selectedCourseCrewList, crewName) {
    const isValid =
      !this.isDuplicatedName(selectedCourseCrewList, crewName) &&
      this.isInLength(crewName) &&
      !this.isBlankExist(crewName);

    return isValid;
  },
  isDuplicatedName(selectedCourseCrewList, crewName) {
    const isDuplicated = selectedCourseCrewList.includes(crewName);
    if (isDuplicated) {
      alert(ALERT_MESSAGE.DUPLICATED_NAME);
    }

    return isDuplicated;
  },
  isInLength(crewName) {
    const inLength = crewName.length <= 5;
    if (!inLength) {
      alert(ALERT_MESSAGE.CREW_NAME_NOT_INLENGTH);
    }

    return inLength;
  },
  isBlankExist(crewName) {
    const isExist = crewName === '' || crewName.includes(' ');
    if (isExist) {
      alert(ALERT_MESSAGE.BLANK_EXIST);
    }

    return isExist;
  },

  isAlreadyMatchedTeam(memberList) {
    return memberList.length !== 0;
  },

  isMemberCountValid(count) {
    const isValid = !this.isBlankExist(count);
    if (isValid) {
      alert(ALERT_MESSAGE.BLANK_EXIST);
    }
  },
};

export const onKeyUpOnlyNumberRegex = input => (input.value = input.value.replace(/[^0-9]/g, ''));
