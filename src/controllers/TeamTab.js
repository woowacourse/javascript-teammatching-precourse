import { matchTeam } from '../utils/index.js';
import TeamTabView from '../views/TeamTabView.js';

export default class TeamTab {
  constructor(storage) {
    this.view = new TeamTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender();
    this.setShowMatcherEvent();
  }

  setShowMatcherEvent() {
    const showTeamMatchButton = document.querySelector('#show-team-matcher-button');
    showTeamMatchButton.addEventListener('click', this.onClickShowTeamMatcher.bind(this));
  }

  setMatchTeamEvent() {
    const matchTeamButton = document.querySelector('#match-team-button');
    matchTeamButton.addEventListener('click', this.onClickMatchTeam.bind(this));
  }

  setRematchTeamEvent() {
    const rematchTeamButton = document.querySelector('#rematch-team-button');
    rematchTeamButton.addEventListener('click', this.onClickRematchTeam.bind(this));
  }

  onClickShowTeamMatcher(e) {
    e.preventDefault();
    const courseSelect = document.querySelector('#course-select');
    const missionSelect = document.querySelector('#mission-select');
    this.course = courseSelect.value;
    this.mission = missionSelect.value;
    this.view.renderMatcher(this.course, this.mission, this.storage.crew[this.course]);
    this.setMatchTeamEvent();
  }

  onClickMatchTeam(e) {
    e.preventDefault();
    const memberCountInput = document.querySelector('#team-member-count-input');
    const memberCount = Number(memberCountInput.value);
    const matchResult = matchTeam(this.storage.crew[this.course], memberCount);
    this.view.renderMatchResult(this.course, this.mission, matchResult);
    this.setRematchTeamEvent();
  }

  onClickRematchTeam() {
    this.view.renderMatcher(this.course, this.mission, this.storage.crew[this.course]);
    this.setMatchTeamEvent();
  }
}
