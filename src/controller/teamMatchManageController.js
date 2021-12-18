import { $, validation, onKeyUpOnlyNumberRegex } from './utils.js';
import { SELECTOR, COURSE_OPTIONS, MISSION_OPTIONS, KEY_VALUE } from '../constants/constants.js';

export default class TeamMatchManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addSelectOptions();
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.teamMatcherButton).addEventListener('click', event =>
      this.selectCourseAndMission(event),
    );
  }

  addSelectOptions() {
    const courseSelect = $(SELECTOR.courseSelect);
    const missionSelect = $(SELECTOR.missionSelect);
    this.view.addOptionsInSelect(courseSelect, COURSE_OPTIONS);
    this.view.addOptionsInSelect(missionSelect, MISSION_OPTIONS);
  }

  selectCourseAndMission(event) {
    event.preventDefault();
    const selectedCourse = $(SELECTOR.courseSelect).value;
    const selectedMission = $(SELECTOR.missionSelect).value;
    this.model.selectCourse(KEY_VALUE[selectedCourse]);
    const { crewList } = this.model.getSelectedCourse();
    const { missionList } = this.model.getSelectedCourse();
    const missionMember = missionList.find(e => e.name === KEY_VALUE[selectedMission]).member;
    if (!validation.isAlreadyMatchedTeam(missionMember)) {
      this.view.renderTeamMatchingSettingTemplate(selectedCourse, selectedMission, crewList);
      this.addTeamMatchingSettingEventListeners();
      return;
    }
    this.view.renderAlreadyMatchingTemplate(selectedCourse, selectedMission, missionMember);
    this.addAlreadyMatchingEventListeners();
  }

  addAlreadyMatchingEventListeners() {
    $(SELECTOR.rematchButton).addEventListener('click', () => this.rematchTeam());
  }

  rematchTeam() {
    this.view.clearTeamCourseAndMissionContents();
    const allCourse = this.model.getAllCourse();
    const selectedCourse = allCourse.find(e => e.name === this.model.selectedCourse);
    const selectedMission = $(SELECTOR.missionSelect).value;
    const mission = selectedCourse.missionList.find(e => e.name === KEY_VALUE[selectedMission]);
    mission.member = [];
    this.model.setAllCourse(allCourse);
  }

  addTeamMatchingSettingEventListeners() {
    $(SELECTOR.matchTeamButton).addEventListener('click', event => this.matchTeam(event));
    $(SELECTOR.memberCountInput).addEventListener('keyup', () =>
      onKeyUpOnlyNumberRegex($(SELECTOR.memberCountInput)),
    );
  }

  matchTeam(event) {
    event.preventDefault();
    const allCourse = this.model.getAllCourse();
    const selectedCourse = allCourse.find(e => e.name === this.model.selectedCourse);
    const selectedMission = selectedCourse.missionList.find(
      e => e.name === KEY_VALUE[$(SELECTOR.missionSelect).value],
    );
    console.log($(SELECTOR.memberCountInput));
    const memberCountPerTeam = $(SELECTOR.memberCountInput).value;
    if (!validation.isBlankExist(memberCountPerTeam)) {
      this.matchTeamByCount(memberCountPerTeam, selectedCourse, selectedMission);
      this.model.setAllCourse(allCourse);
    }
  }

  matchTeamByCount(memberCount, selectedCourse, selectedMission) {
    const randomArray = selectedCourse.crewList.map((x, i) => i); // [0~인원수까지 배열]
    const randomOrderMember = MissionUtils.Random.shuffle(randomArray); // 무작위 배열
    let i;

    while (randomOrderMember.length >= 1) {
      let array = [];
      for (i = 0; i < memberCount; i += 1) {
        if (randomOrderMember.length - memberCount < memberCount) {
          array = randomOrderMember.map(x => {
            return selectedCourse.crewList[x];
          });
          randomOrderMember.splice(0, array.length);
          break;
        } else {
          array.push(selectedCourse.crewList[randomOrderMember[0]]);
          randomOrderMember.shift();
        }
      }
      selectedMission.member.push(array);
    }
  }
}
