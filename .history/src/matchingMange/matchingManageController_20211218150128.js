import MatchingManageView from "./matchingManageView.js";

export default class matchingManageController {
  constructor() {
    this.view = new MatchingManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
  };

  initDOMS = () => {
    this.$courseSelect = document.getElementById("course-select");
    this.$missionSelect = document.getElementById("mission-select");
    this.$showTeamMatcherButton = document.getElementById("show-team-matcher-button");
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };

  setEvent = () => {};

  setSelectOptionEvent = () => {};
}
