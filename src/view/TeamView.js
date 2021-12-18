import { $ } from '../utils/DOM.js';
import { getMatchingQuestion, TEAM_TEMPLATE } from '../utils/template.js';

export class TeamView {
  constructor() {
    this.$teamMain = $('#team-main');
    this.addElements();
  }

  setOnTeamMatcherButtonClick(fn) {
    this.$showTeamMatcherButton.addEventListener('click', (e) => {
      e.preventDefault();
      const courseOptionsIndex = this.$courseSelect.options.selectedIndex;
      const selectedCourse = this.$courseSelect.options[courseOptionsIndex].innerText;
      const missionOptionsIndex = this.$missionSelect.options.selectedIndex;
      const selectedMission = this.$missionSelect.options[missionOptionsIndex].innerText;
      fn(selectedCourse, selectedMission);
    });
  }

  setOnMatchButtonClick(fn, selectedCourse) {
    $('#match-team-button').addEventListener('click', (e) => {
      e.preventDefault();
      const headCountPerTeam = $('#team-member-count-input').value;

      fn(headCountPerTeam, selectedCourse);
    });
  }

  showCrewList(selectedCourse, selectedMission, crewList) {
    this.$teamMemberSection.innerHTML = getMatchingQuestion(selectedCourse, selectedMission);
    const $crewList = $('#crew-list');
    crewList.map((crew) => ($crewList.innerHTML += `<li>${crew}</li>`));
  }

  addElements() {
    this.$teamMain.innerHTML = TEAM_TEMPLATE;
    this.$courseSelect = $('#course-select');
    this.$missionSelect = $('#mission-select');
    this.$showTeamMatcherButton = $('#show-team-matcher-button');
    this.$teamMemberSection = $('#team-member-section');
    this.$teamResultSection = $('#team-result-section');
  }
}
