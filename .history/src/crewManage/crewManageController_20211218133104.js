import CrewManageView from "./crewManageView.js";

export default class CrewManageController {
  constructor() {
    this.view = new CrewManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
  };

  initDOMS = () => {
    this.$crewNameInput = document.getElementById("crew-name-input");
    this.$addCrewButton = document.getElementById("add-crew-button");
    this.$crewTableBody = document.getElementById("crew-table-body");
    this.$frontendCourseRadio = document.getElementById("frontend-course");
    this.$backendCourseRadio = document.getElementById("backend-course");
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };
}
