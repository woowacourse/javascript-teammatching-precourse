import { ID } from '../utils/constants.js';
import { $id } from '../utils/dom.js';

class TeamManageController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  showScreen(currentTabMenu) {
    if (currentTabMenu === this.model.getCurrentTabMenu()) {
      return;
    }

    this.model.setCurrentTabMenu(currentTabMenu);
    this.view.showMatchingSelectScreen();
    this.triggerMatcherButtonClickEvent();
  }

  triggerMatcherButtonClickEvent() {
    $id(ID.TEAM_MATCHER_FORM).addEventListener('submit', (e) => {
      e.preventDefault();
      const course = $id(ID.COURSE_SELECT).value;
      const mission = $id(ID.MISSION_SELECT).value;
      const crewList = this.model.getLocalStorage()['crewManageMenu'][course];
      this.view.showTeamMatchingScreen(crewList, course);
      this.triggerTeamMemberSubmitEvent(course);
    });
  }

  triggerTeamMemberSubmitEvent(courseName) {
    $id(ID.TEAM_MEMBER_COUNT_FORM).addEventListener('submit', (e) => {
      e.preventDefault();

      const teamMemberCount = $id(ID.TEAM_MEMBER_COUNT_INPUT).value;

      this.makeTeamLogic(teamMemberCount, courseName);
    });
  }

  makeTeamLogic(count, courseName) {
    const list = this.model.getLocalStorage()['crewManageMenu'][courseName];

    let crewList = [];

    let array = [...new Array(list.length)].map((v, idx) => idx);
    array = MissionUtils.Random.shuffle(array);

    for (let i = 0; i < array.length; i++) {
      crewList.push(list[array[i]]);
    }

    const maxNumber = Math.floor(crewList.length / count);
    const result = [];
    for (let i = 0; i < maxNumber; i++) {
      result.push([]);
      result[i] = crewList.splice(0, maxNumber);
    }

    for (let i = 0; i < crewList.length; i++) {
      result[i].push(crewList[i]);
    }

    this.view.showTeamMatchingResultScreen(courseName, result);
  }
}

export default TeamManageController;
