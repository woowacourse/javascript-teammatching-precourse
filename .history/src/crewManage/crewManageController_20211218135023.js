import CrewManageModel from "./crewManageModel.js";
import CrewManageView from "./crewManageView.js";

export default class CrewManageController {
  constructor() {
    this.model = new CrewManageModel();
    this.view = new CrewManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
    this.initDOMS();
  };

  initAfterRenderCourse = () => {
    this.initDOMSAfterRenderCourse();
    this.setEvent();
  };

  initDOMS = () => {
    this.$radioButton = document.getElementsByName("course");
    this.$coursePage = document.getElementById("course-page");
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };

  setEvent = () => {
    this.$crewNameForm.addEventListener("submit", this.setClickAddButtonEvent);
  };

  setClickAddButtonEvent = (e) => {
    e.preventDefault();
    const name = this.$crewNameInput.value;
  };

  checkRadioState = () => {
    this.$radioButton.forEach((node) => {
      if (node.checked) {
        this.renderCoursePage(node.value);
      }
    });
  };

  renderCoursePage = (id) => {
    if (id === "frontend") {
      this.view.renderFrontendCourse(this.$coursePage);
    } else if (id === "backend") {
      this.view.renderBackendCourse(this.$coursePage);
    }
    this.initAfterRenderCourse();
  };

  initDOMSAfterRenderCourse = () => {
    this.$crewNameInput = document.getElementById("crew-name-input");
    this.$addCrewButton = document.getElementById("add-crew-button");
    this.$crewNameForm = document.getElementById("crew-name-input").closest("form");
    this.$crewTableBody = document.getElementById("crew-table-body");
  };
}
