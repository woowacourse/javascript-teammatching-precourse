import { ALERT_MESSAGE } from "../constants/constants";

export const $ = id => document.getElementById(id);

export const validation = {
  isCrewNameValid(selectedCourseCrewList, crewName) {
    const isValid = !this.isDuplicatedName(selectedCourseCrewList, crewName);

    return isValid;
  },
  isDuplicatedName(selectedCourseCrewList, crewName) {
    const isDuplicated = selectedCourseCrewList.includes(crewName);
    if(isDuplicated){
        alert(ALERT_MESSAGE)
    }
  },
};
