import Store from '../core/Store.js';
import { isUniqueName } from '../utils/validation.js';
import { COURSE } from '../constant/data.js';

class Crew extends Store {
  init() {
    this.value = {
      selectedCourse: COURSE.FRONTEND,
      [COURSE.FRONTEND]: [],
      [COURSE.BACKEND]: [],
    };
  }

  selectCourse(newSelectedCourse) {
    this.setValue({ selectedCourse: newSelectedCourse });
  }

  addCrew(newCrew) {
    if (isUniqueName(newCrew, this.getSelectedCourseCrews())) {
      this.setValue({ [this.getSelectedCourse()]: [...this.getSelectedCourseCrews(), newCrew] });
    }
  }

  removeCrew(removedName) {
    const updatedCrews = this.getSelectedCourseCrews().filter((name) => name !== removedName);

    this.setValue({ [this.getSelectedCourse()]: updatedCrews });
  }

  getSelectedCourse() {
    return this.value.selectedCourse;
  }

  getSelectedCourseCrews() {
    return this.value[this.getSelectedCourse()];
  }
}

export default new Crew();
