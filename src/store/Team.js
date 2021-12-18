import Store from '../core/Store.js';

class Team extends Store {
  init() {
    this.value = {
      selectedCourse: null,
      selectedMission: null,
    };
  }

  selectOption(course, mission) {
    this.setValue({ selectedCourse: course, selectedMission: mission });
  }

  getSelectedCourse() {
    return this.value.selectedCourse;
  }

  getSelectedMission() {
    return this.value.selectedMission;
  }
}

export default new Team();
