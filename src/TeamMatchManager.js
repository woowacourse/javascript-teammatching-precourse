import { SELECT_MISSION_OPTION } from './constants.js';

export default class TeamMatchManager {
  constructor() {
    this.frontend = {};
    this.backend = {};

    SELECT_MISSION_OPTION.forEach((mission) => {
      this.frontend[mission.value] = [];
      this.backend[mission.value] = [];
    });
  }

  //   match(course, mission, count, crewManager) {
  //     const crews = crewManager.getCrewList(course);
  //   }
}
