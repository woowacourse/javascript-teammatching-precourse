import MatchingManageView from "./matchingManageView.js";

export default class matchingManageController {
  constructor(crews) {
    this.view = new MatchingManageView();
    this.crews = crews;
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
    const courseValue = this.$courseSelect.options[this.$courseSelect.selectedIndex].value;
    const crews = this.crews.model.getCrewsById(courseValue);
    this.matchCrews(count, crews);
  };

  matchCrews = (count, crews) => {
    const crewsAmount = Number(crews.length);
    const crewIndexArray = this.createCrewIndexArray(crewsAmount);
    const shuffledCrews = MissionUtils.Random.shuffle(crewIndexArray);

    const teamCount = Math.floor(crewsAmount / count);
    const remainingCount = crewsAmount % count;
    const teamMemberClass = this.createTeamMemberClass(count, remainingCount, teamCount);
    console.log(teamMemberClass);
  };

  createCrewIndexArray = (crewsAmount) => {
    const arr = new Array(crewsAmount).fill(0);
    return arr.map((elem, idx) => idx);
  };

  createTeamMemberClass = (count, remainingCount, teamCount) => {
    let teamMemberClass = new Array(teamCount).fill(count);
    teamMemberClass = teamMemberClass.map((team, idx) => {
      if (idx === remainingCount - 1) return;
      return team + 1;
    });
    return teamMemberClass;
  };
}
