import { $ } from '../../utils/DOMHelper.js';
import {
  matchResultTemplate,
  selectCourseMissionTemplate,
  teamMatchTemplate,
} from '../../utils/template.js';

export default class TeamMatchView {
  init() {
    this.$main = $('main');
  }

  renderSelectCourseMission() {
    this.$main.innerHTML = selectCourseMissionTemplate();
  }

  selectSelectCourseMissionDOM() {
    this.$courseSelect = $('#course-select');
    this.$missionSelect = $('#mission-select');
    this.$showTeamMatcherButton = $('#show-team-matcher-button');
    this.$teamMatchSection = $('#team-match-section');
  }

  getSelectedValue() {
    const course = this.$courseSelect.options[this.$courseSelect.selectedIndex].value;

    const missionText = this.$missionSelect.options[this.$missionSelect.selectedIndex].text;

    return { course, missionText };
  }

  renderTeamMatch(course, missionText, crews) {
    this.$teamMatchSection.innerHTML = teamMatchTemplate(course, missionText, crews);
  }

  selectTeamMatchDOM() {
    this.$teamMemberCountInput = $('#team-member-count-input');
    this.$matchTeamButton = $('#match-team-button');
  }

  renderMatchResult(course, missionText, teams) {
    this.$teamMatchSection.innerHTML = matchResultTemplate(course, missionText, teams);

    this.selectMatchResultDOM();
  }

  selectMatchResultDOM() {
    this.$rematchTeamButton = $('#rematch-team-button');
  }
}
