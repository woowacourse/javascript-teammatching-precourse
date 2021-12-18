import { $ } from './utils.js';
import { SELECTOR, COURSE_OPTIONS, MISSION_OPTIONS } from '../constants/constants.js';

export default class TeamMatchManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addSelectOptions();
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.teamMatcherButton).addEventListener('click', () => this.selectCourseAndMission());
  }

  addSelectOptions() {
    const courseSelect = $(SELECTOR.courseSelect);
    const missionSelect = $(SELECTOR.missionSelect);
    this.view.addOptionsInSelect(courseSelect, COURSE_OPTIONS);
    this.view.addOptionsInSelect(missionSelect, MISSION_OPTIONS);
  }

  selectCourseAndMission() {
    const selectedCourse = $(SELECTOR.courseSelect).value;
    const selectedMission = $(SELECTOR.missionSelect).value;
    
  }
}
