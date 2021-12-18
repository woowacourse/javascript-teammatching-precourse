import { getData, setData } from '../utils/handleData.js';
import { isValidName, validator } from './validations.js';

export default class Course {
  constructor(type) {
    this.type = type;
    this.crewList = [];
    this.getCrewList();
  }

  getCrewList() {
    const allCrews = getData('course') || {};
    const courseCrews = allCrews[this.type] || [];
    this.crewList = courseCrews;
  }

  addCrewToCourse(crewName) {
    if (validator(isValidName, crewName, '이름이 유효하지 않습니다.')) {
      this.crewList.push(crewName);
      this.saveCrewList();
      return true;
    }
  }

  removeCrewFromCourse(crewName) {
    const index = this.crewList.indexOf(crewName);
    this.crewList.splice(index, 1);
    this.saveCrewList();
  }

  saveCrewList() {
    const current = getData('course') || {};
    current[this.type] = this.crewList;
    setData('course', current);
  }
}
