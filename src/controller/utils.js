import { ALERT_MESSAGE } from '../constants/constants.js';

export const $ = id => document.getElementById(id);

export const validation = {
  isCrewNameValid(selectedCourseCrewList, crewName) {
    const isValid =
      !this.isDuplicatedName(selectedCourseCrewList, crewName) && this.crewNameInLength(crewName);

    return isValid;
  },
  isDuplicatedName(selectedCourseCrewList, crewName) {
    const isDuplicated = selectedCourseCrewList.includes(crewName);
    if (isDuplicated) {
      alert(ALERT_MESSAGE.DUPLICATED_NAME);
    }

    return isDuplicated;
  },
  crewNameInLength(crewName) {
    const inLength = crewName.length <= 5;
    if (!inLength) {
      alert(ALERT_MESSAGE.CREW_NAME_NOT_INLENGTH);
    }

    return inLength;
  },
};
