import { FRONT_END } from '../utils/constant.js';

export class TeamController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  triggerEvent() {
    this.coreView.teamView.setOnOptionsClick(this.onOptionsClick.bind(this));
  }

  triggerMatchClickEvent(selectedCourse, selectedMission) {
    this.coreView.teamView.setOnMatchButtonClick(
      this.onMatchButtonClick.bind(this),
      selectedCourse,
      selectedMission,
    );
  }

  onOptionsClick(selectedCourse, selectedMission) {
    const crewList = this.getCrewListFromModel(selectedCourse);
    this.coreView.teamView.showMatchingQuestion(selectedCourse, selectedMission, crewList);
    this.triggerMatchClickEvent(selectedCourse, selectedMission);
  }

  onMatchButtonClick(headCountPerTeam, selectedCourse, selectedMission) {
    const crewList = this.getCrewListFromModel(selectedCourse);
    this.coreView.teamView.showTeamMatchResult(selectedCourse, selectedMission);
  }

  getCrewListFromModel(selectedCourse) {
    if (selectedCourse === FRONT_END) {
      return this.model.frontEndCrewList;
    }
    return this.model.backEndCrewList;
  }
}
