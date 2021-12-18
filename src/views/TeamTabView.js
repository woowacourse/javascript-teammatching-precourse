import teamTabTemplate from '../templates/team-tab-template.js';

export default class TeamTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  initialRender() {
    this.contentContainer.innerHTML = teamTabTemplate.main;
  }
}
