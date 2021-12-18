import ManageCrewView from "./views/ManageCrewView.js";

export default class Menu {
  constructor() {
    this.manageCrewView = new ManageCrewView();
  }

  manageCrewInitialize() {
    this.manageCrewView.render();
  }
}
