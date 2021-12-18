import TeamMatchView from '../../view/teamMatchView/teamMatchView.js';

export default class TeamMatchController {
  constructor(model) {
    this.model = model;
    this.view = new TeamMatchView();
  }
}
