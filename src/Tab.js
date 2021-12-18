import ManageCrewView from "./views/ManageCrewView.js";
import ManageTeamView from "./views/ManageTeamView.js";
import ManageCrewController from "./controllers/ManageCrewController.js";

export default class Menu {
  constructor() {
    this.manageCrewView = new ManageCrewView();
    this.manageTeamView = new ManageTeamView();
    this.manageCrewController = new ManageCrewController();
  }

  manageCrewInitialize() {
    this.manageCrewView.initialize();
    this.manageCrewController.initialize();
  }

  manageTeamInitialize() {
    this.manageTeamView.render();
  }
}
