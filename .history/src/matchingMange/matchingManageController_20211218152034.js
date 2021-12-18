import MatchingManageView from "./matchingManageView.js";

export default class matchingManageController {
  constructor() {
    this.view = new MatchingManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
    this.initDOMS();
    this.setEvent();
  };

  initDOMS = () => {
    this.$courseSelect = document.getElementById("course-select");
    this.$missionSelect = document.getElementById("mission-select");
    this.$selectForm = document.getElementById("course-select").closest("form");
    this.$matchingSection = document.getElementById("matching-section");
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };

  setEvent = () => {
    this.$selectForm.addEventListener("submit", this.setSelectOptionEvent);
  };

  setSelectOptionEvent = (e) => {
    e.preventDefault();
    const courseText = this.$courseSelect.options[this.$courseSelect.selectedIndex].text;
    const missionText = this.$missionSelect.options[this.$missionSelect.selectedIndex].text;
    const courseValue = this.$courseSelect.options[this.$courseSelect.selectedIndex].value;
    this.view.renderMatchingPage(courseText, missionText, this.$matchingSection);
    this.initAfterRenderMatching();
  };

  initAfterRenderMatching = () => {
    this.initDOMSAfterRenderMatching();
    this.setEventAfterRenderMatching();
  };

  initDOMSAfterRenderMatching = () => {
    this.$teamMemverCountInput = document.getElementById("team-member-count-input");
    this.$teamMatchForm = document.getElementById("match-team-button").closest("form");
  };

  setEventAfterRenderMatching = () => {
    this.$teamMatchForm.addEventListener("submit", this.setMatchingMemberEvent);
  };

  setMatchingMemberEvent = (e) => {
    e.preventDefault();
    const count = this.$teamMemverCountInput.value;
  };
}
