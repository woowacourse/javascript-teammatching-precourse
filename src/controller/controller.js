import CommonView from "../view/commonView.js";
import ManageCrewView from "../view/manageCrewView.js";

export default class Controller {
  constructor() {
    this.commonView = new CommonView().init();
    this.manageCrewView = new ManageCrewView();
  }
}
