import { FRONT_END } from '../utils/constant.js';
import { create2DArray, sequenceArray } from '../utils/makeArray.js';

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
    let crewList = this.getCrewListFromModel(selectedCourse);
    const teamNumber = Math.floor(crewList.length / headCountPerTeam);
    const teamList = create2DArray(teamNumber, headCountPerTeam);
    let shuffleNumber = MissionUtils.Random.shuffle(sequenceArray(crewList.length));
    for (let i = 0; i < shuffleNumber.length; i++) {
      teamList[i % teamNumber].push(crewList[shuffleNumber[i]]);
    }
    this.coreView.teamView.showTeamMatchResult(selectedCourse, selectedMission, teamList);
  }

  getCrewListFromModel(selectedCourse) {
    if (selectedCourse === FRONT_END) {
      return this.model.frontEndCrewList;
    }
    return this.model.backEndCrewList;
  }
}
