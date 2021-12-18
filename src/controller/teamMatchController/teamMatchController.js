import { showError } from '../../utils/error.js';
import { isValidMemberCount } from '../../utils/validator.js';
import TeamMatchView from '../../view/teamMatchView/teamMatchView.js';

export default class TeamMatchController {
  constructor(model) {
    this.model = model;
    this.view = new TeamMatchView();
  }

  init() {
    this.view.init();
    this.view.renderSelectCourseMission();
    this.view.selectSelectCourseMissionDOM();
    console.log(this.view.$courseSelect);

    this.attachSelectCourseMissionEvents();
  }

  attachSelectCourseMissionEvents() {
    this.view.$showTeamMatcherButton.addEventListener(
      'click',
      this.handleSelectCourseMission.bind(this)
    );
  }

  handleSelectCourseMission(e) {
    e.preventDefault();

    const { course, mission, missionText } = this.view.getSelectedValue();

    const crews = this.model.getCrews(course);

    this.view.renderTeamMatch(course, missionText, crews);
    this.view.selectTeamMatchDOM();
    return this.attachTeamMatchEvents();
  }

  attachTeamMatchEvents() {
    this.view.$matchTeamButton.addEventListener('click', this.handleMatchTeam.bind(this));
  }

  handleMatchTeam(e) {
    e.preventDefault();

    const memberCount = this.view.$teamMemberCountInput.value;

    if (isValidMemberCount(memberCount)) {
      return console.log(memberCount);
    }

    return showError();
  }
}
