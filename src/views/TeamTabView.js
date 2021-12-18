import data from '../constants/data.js';
import teamTabTemplate from '../templates/team-tab-template.js';
import { getNameFromValue } from '../utils/index.js';

export default class TeamTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  initialRender() {
    this.contentContainer.innerHTML = teamTabTemplate.main;
    this.resultContainer = document.querySelector('#team-matching-result');
    this.renderOption();
  }

  renderOption() {
    const courseSelect = document.querySelector('#course-select');
    const missionSelect = document.querySelector('#mission-select');
    data.course.forEach((item) => {
      courseSelect.innerHTML += teamTabTemplate.option(item.name, item.value);
    });
    data.mission.forEach((item) => {
      missionSelect.innerHTML += teamTabTemplate.option(item.name, item.value);
    });
  }

  renderMatcher(courseValue, missionValue, crew) {
    const courseName = getNameFromValue(data.course, courseValue);
    const missionName = getNameFromValue(data.mission, missionValue);
    this.resultContainer.innerHTML = teamTabTemplate.matcher(courseName, missionName);
    this.renderCrewList(crew);
  }

  renderCrewList(crew) {
    const crewList = document.querySelector('#crew-list');
    crewList.innerHTML = '';
    crew.forEach((name) => {
      crewList.innerHTML += teamTabTemplate.listItem(name);
    });
  }

  renderMatchResult(courseValue, missionValue, teams) {
    const courseName = getNameFromValue(data.course, courseValue);
    const missionName = getNameFromValue(data.mission, missionValue);
    this.resultContainer.innerHTML = teamTabTemplate.matchResult(courseName, missionName);
    const teamList = document.querySelector('#team-match-result');
    teamList.innerHTML = '';
    teams.forEach((team) => {
      teamList.innerHTML += teamTabTemplate.listItem(team.join(','));
    });
  }
}
