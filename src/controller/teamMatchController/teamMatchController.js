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
    console.log(crews);

    this.view.renderTeamMatch(course, missionText, crews);

    console.log(course, mission);
  }
}
