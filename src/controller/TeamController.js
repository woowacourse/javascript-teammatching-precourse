export class TeamController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  triggerEvent() {
    this.coreView.teamView.setOnTeamMatcherButtonClick(this.onTeamMatcherButtonClick.bind(this));
  }

  onTeamMatcherButtonClick(selectedCourse, selectedMission) {
    this.coreView.teamView.showCrewList(selectedCourse, selectedMission);
  }
}
