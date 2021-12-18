import TeamMatchModel from "../model/TeamMatchModel.js";

export default class TeamMathController {
  constructor($app) {
    this.$app = $app;
    this.teamMatchModel = new TeamMatchModel();
    this.teamMatchField = document.createElement('main');
    this.render();

  }

  teamMatchMenuClick() {
    this.teamMatchField.style = ("display: block");
  }

}