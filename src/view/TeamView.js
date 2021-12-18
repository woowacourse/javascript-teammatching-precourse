import { $ } from '../utils/DOM.js';
import { TEAM_TEMPLATE } from '../utils/template.js';

export class TeamView {
  constructor() {
    this.$teamMain = $('#team-main');
    this.addElements();
  }

  setOnTeamMatcherButtonClick(fn) {
    this.$showTeamMatcherButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
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
