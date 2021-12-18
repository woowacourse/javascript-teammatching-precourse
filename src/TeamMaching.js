import TeamMatchingView from "./views/TeamMachingView.js";

export default class VendingMachine {
  constructor() {
    this.teamMachingView = new TeamMatchingView();
  }

  initialize() {
    this.teamMachingView.render();
  }
}
