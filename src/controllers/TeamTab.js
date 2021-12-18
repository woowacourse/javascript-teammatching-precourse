import TeamTabView from '../views/TeamTabView.js';

export default class TeamTab {
  constructor() {
    this.view = new TeamTabView();
  }

  initialize() {
    this.view.initialRender();
  }
}
