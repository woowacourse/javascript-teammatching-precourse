export class TeamController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  triggerEvent() {
    this.coreView.teamView.setOnTeamMatcherButtonClick(this.onTeamMatcherButtonClick.bind(this));
  }

  triggerMatchClickEvent(selectedCourse) {
    this.coreView.teamView.setOnMatchButtonClick(
      this.onMatchButtonClick.bind(this),
      selectedCourse,
    );
  }

  onTeamMatcherButtonClick(selectedCourse, selectedMission) {
    const crewList = this.getCrewListFromModel(selectedCourse);
    this.coreView.teamView.showCrewList(selectedCourse, selectedMission, crewList);
    this.triggerMatchClickEvent(selectedCourse);
  }

  onMatchButtonClick(headCountPerTeam, selectedCourse) {
    const crewList = this.getCrewListFromModel(selectedCourse);
    this.coreView.teamView.showCrewList(crewList);
  }

  getCrewListFromModel(selectedCourse) {
    if (selectedCourse === FRONT_END) {
      return this.model.frontEndCrewList;
    }
    return this.model.backEndCrewList;
  }
}
