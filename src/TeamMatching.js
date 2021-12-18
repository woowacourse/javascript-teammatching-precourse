import TeamMatchingView from './views/TeamMatchingView.js';

export default class TeamMatching {
  constructor() {
    this.view = new TeamMatchingView();
  }

  initialize() {
    this.view.initialRender();
  }
}
