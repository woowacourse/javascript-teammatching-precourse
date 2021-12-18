import { teamMatchModel } from '../Models/teamMatchModel.js';
import { $, $$ } from '../Utils/common.js';
import { CLASS, ID, OPTIONS } from '../Utils/constants.js';
import LocalStorageUtils from '../Utils/localStorageUtils.js';
import ValidationUtils from '../Utils/validationUtils.js';
import TeamMatchView from '../Views/teamMatchView.js';

export default class TeamMatchController {
  constructor() {
    this.teamMatchView = new TeamMatchView();
    this.selectedCourse;
    this.selectedMission;
  }

  render() {
    this.teamMatchView.topSelectRender();
    this.configureSelectButton();
  }

  configureSelectButton() {
    $(`#${ID.SHOW_TEAM_MATCHER_BUTTON}`).addEventListener('click', this.onClickSelectButton);
  }

  configureMatchButton() {
    $(`#${ID.MATCH_TEAM_BUTTON}`).addEventListener('click', this.onClickMatchButton);
  }

  configureRematchButton() {
    $(`#${ID.REMATCH_TEAM_BUTTON}`).addEventListener('click', this.onClickRematchButton);
  }

  onClickSelectButton = (event) => {
    event.preventDefault();
    this.matchRadomTeam();
  };

  onClickMatchButton = (event) => {
    event.preventDefault();
    this.matchResultRender();
  };

  onClickRematchButton = (event) => {
    event.preventDefault();
    this.matchRadomTeam();
  };

  renderCrewList(course) {
    const data = this.getSelectedData(course);
    this.teamMatchView.crewListRender(data);
  }

  matchRadomTeam() {
    this.selectedCourse = $(`#${ID.COURSE_SELECT}`).value;
    this.selectedMission = $(`#${ID.MISSION_SELECT}`).value;
    if (this.checkTeamData(this.selectedCourse, this.selectedMission)) {
    }
    this.teamMatchView.bodyMainRender();
    this.configureMatchButton();
    this.renderCrewList(this.selectedCourse);
  }

  matchResultRender() {
    const number = Number($(`#${ID.TEAM_MEMBER_COUNT_INPUT}`).value);
    const randomTeamList = this.createRandomTeam(number);
    console.log(randomTeamList);
    this.teamMatchView.matchedMainRender();
    this.teamMatchView.matchedListRender(randomTeamList);
    this.configureRematchButton();
  }

  getSelectedData(course) {
    let data;
    if (course === OPTIONS.COURSE[0].VALUE) {
      data = LocalStorageUtils.getItem(LocalStorageUtils.keys.frontCrewManage);
    } else {
      data = LocalStorageUtils.getItem(LocalStorageUtils.keys.BackendCrewManage);
    }
    return data ? data : [];
  }

  createRandomNumberList() {
    const data = this.getSelectedData(this.selectedCourse);
    let numberList = [];
    data.forEach((_, index) => numberList.push(index));
    const randomeList = MissionUtils.Random.shuffle(numberList);
    return randomeList;
  }

  createRandomTeam(number) {
    let result = [];
    const data = this.getSelectedData(this.selectedCourse);
    const randomList = this.createRandomNumberList();
    while (randomList.length >= number) {
      const tempList = this.createTempRandomList(randomList, number);
      result.push(tempList);
    }
    let temp = [];
    randomList.forEach((item) => temp.push(data[item]));
    result.push(temp);
    return result;
  }

  createTempRandomList(randomList, number) {
    const data = this.getSelectedData(this.selectedCourse);
    let tempList = [];
    const list = randomList.splice(0, number);
    list.forEach((item) => tempList.push(data[item]));
    return tempList;
  }

  saveTeamData(list, course, mission) {
    const data = LocalStorageUtils.getItem(LocalStorageUtils.keys.teamMatcher);
    if (!data) data = [];
  }

  deleteTeamData() {}

  checkTeamData(course, mission) {
    let data = LocalStorageUtils.getItem(LocalStorageUtils.keys.teamMatcher);
    if (!data) data = teamMatchModel;
    LocalStorageUtils.setItem(LocalStorageUtils.keys.teamMatcher, data);
    return data[course][mission];
  }
}
