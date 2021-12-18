import { getData, setData } from '../utils/handleData.js';

export default class Mission {
  constructor(name, course) {
    this.name = name;
    this.course = course;
    this.teams = [];
  }

  matchTeams(minMemberCount) {
    const shuffledNum = MissionUtils.Random.shuffle(
      this.course.crewList.map((c, i) => i)
    );
    const shuffled = shuffledNum.map((idx) => this.course.crewList[idx]);
    const teamCount = Math.floor(this.course.crewList.length / minMemberCount);
    const teamArray = [];

    shuffled.forEach((crew, i) => {
      const teamNum = i % teamCount;
      const teamContainer = teamArray[teamNum] || [];
      teamContainer.push(crew);
      teamArray[teamNum] = teamContainer;
    });

    this.teams = teamArray;
    this.saveTeamsToStorage();
  }

  saveTeamsToStorage() {
    const missions = getData('mission') || {};
    const singleMission = missions[this.name] || {};
    singleMission[this.course.type] = this.teams;
    missions[this.name] = singleMission;
    setData('mission', missions);
  }

  static getTeamsFromStorage(course, mission) {
    const missions = getData('mission') || {};
    return missions[mission] ? missions[mission][course] || [] : [];
  }
}
