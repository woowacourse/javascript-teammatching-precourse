import { LOCALSTORAGE_KEY, MISSION_OPTIONS } from '../constants/constants.js';

export default class Model {
  constructor() {
    this.makeCourse('프론트엔드');
    this.makeCourse('백엔드');
    this.selectedCourse = '';
  }

  makeCourse(courseName) {
    const allCourse = this.getAllCourse();
    const course = {
      name: courseName,
      crewList: [],
      missionList: MISSION_OPTIONS.map(e => {
        return { name: e.name, member: [] };
      }),
    };
    allCourse.push(course);
    if (!this.getAllCourse().find(e => e.name === courseName)) {
      this.setAllCourse(allCourse);
    }
  }

  setAllCourse(allCourse) {
    localStorage.setItem(LOCALSTORAGE_KEY.course, JSON.stringify(allCourse));
  }

  clearSelectedCourse() {
    this.selectedCourse = '';
  }

  getAllCourse() {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.course)) || [];
  }

  getSelectedCourse() {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.course)).find(
      e => e.name === this.selectedCourse,
    );
  }

  selectCourse(courseName) {
    this.selectedCourse = courseName;
  }

  addCrewInSelectedCourse(crewName) {
    const allCourse = this.getAllCourse();
    const selectedCourse = allCourse.find(e => e.name === this.selectedCourse);
    selectedCourse.crewList.push(crewName);
    this.setAllCourse(allCourse);
  }
}
