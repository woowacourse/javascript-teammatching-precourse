import { TEAM_TAP_ID } from '../constants.js';

export default class TeamInput {
  constructor() {
    this.selectTeam = this.getSelectTeam();
    this.selectMission = this.getSelectMission();
  }

  getSelectTeam() {
    const selectEl = document.getElementById(TEAM_TAP_ID.selectCourse);
    let value = '';
    for (let i = 0; i < selectEl.options.length; i += 1) {
      if (selectEl.options[i].selected) {
        value = selectEl.options[i].value;
      }
    }

    return value;
  }

  getSelectMission() {
    const selectEl = document.getElementById(TEAM_TAP_ID.selectMission);
    let value = '';
    for (let i = 0; i < selectEl.options.length; i += 1) {
      if (selectEl.options[i].selected) {
        value = selectEl.options[i].value;
      }
    }

    return value;
  }
}
