import { FRONT_END } from '../utils/constant.js';

export class TeamController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  triggerEvent() {
    this.coreView.teamView.setOnTeamMatcherButtonClick(this.onTeamMatcherButtonClick.bind(this));
  }

  onTeamMatcherButtonClick(selectedCourse, selectedMission) {
    const crewList = this.getCrewListFromModel(selectedCourse);
    this.coreView.teamView.showCrewList(selectedCourse, selectedMission, crewList);
  }

  getCrewListFromModel(selectedCourse) {
    if (selectedCourse === FRONT_END) {
      return this.model.frontEndCrewList;
    }
    return this.model.backEndCrewList;
  }
}
