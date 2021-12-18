import { SELECTOR, STORAGE_KEY } from '../constants.js';
import Store from '../utils/store.js';

class CrewManageModel {
  constructor() {
    this.$crewCourse =
      Store.getLocalStorage(STORAGE_KEY.crewCourse) || SELECTOR.frontendCourseRadioInputId;
  }

  getCrewCourse() {
    return this.$crewCourse;
  }

  setCrewCourse(courseName) {
    this.$crewCourse = courseName;
    Store.setLocalStorage(STORAGE_KEY.crewCourse, courseName);
  }
}

export default CrewManageModel;
