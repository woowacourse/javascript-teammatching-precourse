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
    this.$container.addEventListener("click", this.setDeleteCrewEvent);
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
      this.renderCrews(this.model.getCrewsById(selectedState));
    } catch (err) {
      alert(err);
    }
  };

  setDeleteCrewEvent = ({ target }) => {
    if (target.id !== "delete-crew-button") return;
    console.log(target.closest("tr").querySelector("#crew-name"));
    const name = target.closest("tr").getElementById("crew-name").innerText;
    const selectedState = this.checkRadioState();

    this.model.deleteCrew(selectedState, name);
    this.view.renderCrewsTable(this.model.getCrewsById(selectedState), this.$crewTableBody);
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
    this.renderCrews(this.model.getCrewsById(selectedState));
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
