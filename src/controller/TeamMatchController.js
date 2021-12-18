import TeamMatchModel from "../model/TeamMatchModel.js";

export default class TeamMathController {
  constructor($app) {
    this.$app = $app;
    this.teamMatchModel = new TeamMatchModel();
    this.teamMatchField = document.createElement('main');
    this.render();
    this.setCrewList();
    this.getTeamMatchOption();
    this.teamMatchOption();
  }

  teamMatchMenuClick() {
    this.teamMatchField.style = ("display: block");
    this.setCrewList();
    this.renderTeamMatcherFrom();
  }

  setTeamMatchOption() {
    this.teamMatchModel.toLocalTeamMatchOption(this.course, this.mission);
  }

  getTeamMatchOption() {
    this.locaTeamMatchOption = this.teamMatchModel.fromLocalTeamMatchOption();
    this.locaTeamMatchOption && this.renderTeamMatcherFrom();
  }

  setCrewList() {
    this.localCrewList = this.teamMatchModel.fromLocalCrewLost();
  }

  setMatchMission() {
    this.teamMatchModel.handleMatchMission(this.locaTeamMatchOption, this.localCrewList, this.personCount);
  }

}