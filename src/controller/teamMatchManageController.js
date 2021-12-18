import { $ } from './utils.js';
import { SELECTOR, COURSE_OPTIONS, MISSION_OPTIONS } from '../constants/constants.js';

export default class TeamMatchManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.addSelectOptions();
  }

  addEventListeners() {}

  addSelectOptions() {
    const courseSelect = $(SELECTOR.courseSelect);
    const missionSelect = $(SELECTOR.missionSelect);
    this.view.addOptionsInSelect(courseSelect, COURSE_OPTIONS);
    this.view.addOptionsInSelect(missionSelect, MISSION_OPTIONS);
  }
}
