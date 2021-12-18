import { $ } from '../../utils/DOMHelper.js';
import { selectCourseMissionTemplate, teamMatchTemplate } from '../../utils/template.js';

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

    const mission = this.$missionSelect.options[this.$missionSelect.selectedIndex].value;

    const missionText = this.$missionSelect.options[this.$missionSelect.selectedIndex].text;

    return { course, mission, missionText };
  }

  renderTeamMatch(course, missionText, crews) {
    this.$teamMatchSection.innerHTML = teamMatchTemplate(course, missionText, crews);
  }

  selectTeamMatchDOM() {
    this.$teamMemberCountInput = $('#team-member-count-input');
    this.$matchTeamButton = $('#match-team-button');
  }
}
