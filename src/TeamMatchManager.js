import { SELECT_MISSION_OPTION } from './constants.js';
import Team from './Team.js';

export default class TeamMatchManager {
  constructor() {
    this.frontend = {};
    this.backend = {};

    SELECT_MISSION_OPTION.forEach((mission) => {
      this.frontend[mission.value] = [];
      this.backend[mission.value] = [];
    });
  }

  match(course, mission, count, crewManager) {
    const crews = crewManager.getCrewList(course);
    const totalCrewCount = crews.length;
    let teamCrewCounts = [];
    const teamCount = parseInt(totalCrewCount / count);
    let remainderCount = totalCrewCount % count;

    for (let i = 0; i < teamCount; i++) {
      teamCrewCounts.push(teamCount);
    }

    let teamIndex = 0;
    while (remainderCount > 0) {
      teamCrewCounts[teamIndex]++;
      remainderCount--;
      teamIndex++;
    }

    let current = 0;
    for (let i = 0; i < teamCrewCounts.length; i++) {
      console.log(current);
      this[course][mission].push(new Team(crews.slice(current, current + teamCrewCounts[i])));

      current += teamCrewCounts[i];
    }

    console.log(this[course][mission]);
  }
}
