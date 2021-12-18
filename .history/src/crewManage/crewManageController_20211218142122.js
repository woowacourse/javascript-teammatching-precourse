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
    this.setEvent();
  };

  initAfterRenderCourse = () => {
    this.initDOMSAfterRenderCourse();
    this.setEventAfterRenderCourse();
  };

  initDOMS = () => {
    this.$radioButton = document.getElementsByName("course");
    this.$radioForm = document.getElementById("frontend-course").closest("div");
    this.$coursePage = document.getElementById("course-page");
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };

  setEvent = () => {
    this.$radioForm.addEventListener("change", this.setChangeRadioEvent);
  };

  setEventAfterRenderCourse = () => {
    this.$crewNameForm.addEventListener("submit", this.setClickAddButtonEvent);
  };

  setClickAddButtonEvent = (e) => {
    e.preventDefault();

    try {
      const name = this.$crewNameInput.value;
      const selectedState = this.checkRadioState();
      this.model.addCrew(selectedState, name);
      this.renderCrews(this.model.getElementById(selectedState));
    } catch (err) {
      alert(err);
    }
  };

  checkRadioState = () => {
    let state = null;
    this.$radioButton.forEach((node) => {
      if (node.checked) {
        state = node.value;
      }
    });
    return state;
  };

  setChangeRadioEvent = () => {
    const selectedState = this.checkRadioState();
    this.renderCoursePage(selectedState);
    this.renderCrews(this.model.getElementById(selectedState));
  };

  renderCrews = (crews) => {
    this.view.renderCrewsTable(crews, this.$crewTableBody);
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
