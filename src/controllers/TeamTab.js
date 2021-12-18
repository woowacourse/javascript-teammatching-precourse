import TeamTabView from '../views/TeamTabView.js';

export default class TeamTab {
  constructor(storage) {
    this.view = new TeamTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender();
  }
}
