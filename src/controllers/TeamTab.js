import TeamTabView from '../views/TeamTabView.js';

export default class TeamTab {
  constructor(storage) {
    this.view = new TeamTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender();
    this.setEvent();
  }

  setEvent() {
    const teamMatchButton = document.querySelector('#show-team-matcher-button');
    teamMatchButton.addEventListener('click', this.onClickShowTeamMatch.bind(this));
  }

  onClickShowTeamMatch(e) {
    e.preventDefault();
    const courseSelect = document.querySelector('#course-select');
    const missionSelect = document.querySelector('#mission-select');
    this.view.renderInitMatch(courseSelect.value, missionSelect.value, this.storage.crew[courseSelect.value]);
  }
}
