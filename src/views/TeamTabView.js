import { optionData } from '../constants/data.js';
import teamTabTemplate from '../templates/team-tab-template.js';

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
    optionData.course.forEach((item) => {
      courseSelect.innerHTML += teamTabTemplate.option(item.name, item.value);
    });
    optionData.mission.forEach((item) => {
      missionSelect.innerHTML += teamTabTemplate.option(item.name, item.value);
    });
  }

  renderMatcher(courseValue, missionValue, crew) {
    const courseName = optionData.course.find((item) => item.value === courseValue).name;
    const missionName = optionData.mission.find((item) => item.value === missionValue).name;
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
    const courseName = optionData.course.find((item) => item.value === courseValue).name;
    const missionName = optionData.mission.find((item) => item.value === missionValue).name;
    this.resultContainer.innerHTML = teamTabTemplate.matchResult(courseName, missionName);
    const teamList = document.querySelector('#team-match-result');
    teamList.innerHTML = '';
    teams.forEach((team) => {
      teamList.innerHTML += teamTabTemplate.listItem(team.join(','));
    });
  }
}
