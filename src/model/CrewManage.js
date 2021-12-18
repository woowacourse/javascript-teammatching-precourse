import { SELECTOR, STORAGE_KEY } from '../constants.js';
import Store from '../utils/store.js';

class CrewManageModel {
  getCrewCourse() {
    return Store.getLocalStorage(STORAGE_KEY.crewCourse) || SELECTOR.frontendCourseRadioInputId;
  }

  getFrontEndMember() {
    return Store.getLocalStorage(STORAGE_KEY.crewFrontEndMember) || [];
  }

  getBackEndMember() {
    return Store.getLocalStorage(STORAGE_KEY.crewBackEndMember) || [];
  }

  setCrewCourse(courseName) {
    Store.setLocalStorage(STORAGE_KEY.crewCourse, courseName);
  }

  setFrontEndMember(members) {
    Store.setLocalStorage(STORAGE_KEY.crewFrontEndMember, members);
  }

  setBackEndMember(members) {
    Store.setLocalStorage(STORAGE_KEY.crewBackEndMember, members);
  }
}

export default CrewManageModel;
