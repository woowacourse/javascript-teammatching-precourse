import TeamMatchModel from "../model/TeamMatchModel.js";

export default class TeamMathController {
  constructor($app) {
    this.$app = $app;
    this.teamMatchModel = new TeamMatchModel();
    this.teamMatchField = document.createElement('main');
    this.render();
    this.teamMatchOption();
  }

  teamMatchMenuClick() {
    this.teamMatchField.style = ("display: block");
  }

  setTeamMatchOption() {
    this.teamMatchModel.toLocalTeamMatchOption(this.course, this.mission);
    this.getTeamMatchOption();
  }

  getTeamMatchOption() {
    this.locaTeamMatchOption = this.teamMatchModel.fromLocalTeamMatchOption();
  }

}