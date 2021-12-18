import Store from '../core/Store.js';
import { COURSE } from '../constant/data.js';

class Crew extends Store {
  init() {
    this.value = {
      selectedCourse: COURSE.FRONTEND,
    };
  }

  selectCourse(newSelectedCourse) {
    this.setValue({ selectedCourse: newSelectedCourse });
  }
}

export default new Crew();
