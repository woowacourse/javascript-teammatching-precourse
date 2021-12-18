import ManageCrewView from "./views/ManageCrewView.js";
import ManageTeamView from "./views/ManageTeamView.js";

export default class Menu {
  constructor() {
    this.manageCrewView = new ManageCrewView();
    this.manageTeamView = new ManageTeamView();
  }

  manageCrewInitialize() {
    this.manageCrewView.render();
  }

  manageTeamInitialize() {
    this.manageTeamView.render();
  }
}
