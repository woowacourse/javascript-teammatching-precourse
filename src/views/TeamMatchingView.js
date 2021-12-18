import teamMatchingTemplate from '../templates/team-matching-template.js';

export default class TeamMatchingView {
  constructor() {
    this.app = document.querySelector('#app');
  }

  initialRender() {
    this.app.innerHTML = teamMatchingTemplate.main;
  }
}
