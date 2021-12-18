import CrewManageView from "./crewManageView.js";

export default class CrewManageController {
  constructor() {
    this.view = new CrewManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {};

  initPage = () => {
    this.view.renderPage();
  };
}
