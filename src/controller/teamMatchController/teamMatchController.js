import { showError } from '../../utils/error.js';
import { matchTeam } from '../../utils/matchTeam.js';
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
    const { course, missionText } = this.view.getSelectedValue();

    if (isValidMemberCount(memberCount, this.model.selectedCrews.length)) {
      const finalteams = matchTeam(this.model.selectedCrews, memberCount);
      this.view.renderMatchResult(course, missionText);
      this.view.renderResult(this.model.changeToNames(finalteams));

      return this.attachMatchResultEvents();
    }
    return showError();
  }

  attachMatchResultEvents() {
    this.view.$rematchTeamButton.addEventListener('click', this.handleRematch.bind(this));
  }

  handleRematch(e) {
    e.preventDefault();

    const { course, missionText } = this.view.getSelectedValue();

    const crews = this.model.getCrews(course);

    this.view.renderTeamMatch(course, missionText, crews);
    this.view.selectTeamMatchDOM();
    return this.attachTeamMatchEvents();
  }
}
