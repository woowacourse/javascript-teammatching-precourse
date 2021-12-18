import MatchingManageView from "./matchingManageView.js";

export default class matchingManageController {
  constructor() {
    this.view = new MatchingManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
    this.initDOMS();
  };

  initDOMS = () => {
    this.$courseSelect = document.getElementById("course-select");
    this.$missionSelect = document.getElementById("mission-select");
    this.$selectForm = document.getElementById("course-select").closest("form");
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };

  setEvent = () => {
    this.$selectForm.addEventListener("submit", this.setSelectOptionEvent);
  };

  setSelectOptionEvent = (e) => {
    e.preventDefault();
    const course = this.$courseSelect.options[this.$courseSelect.selectedIndex];
    const mission = this.$missionSelect.options[this.$missionSelect.selectedIndex];
    console.log(course, mission);
  };
}
