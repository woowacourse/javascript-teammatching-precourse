import { $ } from '../util/dom.js';
import { store } from '../store/store.js';
import { renderNotExistTeam, renderExistTeam } from '../view/renderTeamTab.js';
import { check } from '../util/checkValue.js';
import { ALERT, DECIMAL } from '../constants/constants.js';

export const checkExistTeam = e => {
  e.preventDefault();
  let target = $('#course-select');
  const course = target.options[target.selectedIndex].text;
  target = $('#mission-select');
  const mission = target.options[target.selectedIndex].text;
  const missionValue = target.options[target.selectedIndex].value;
  const courseTeam = checkcourseTeam();
  const teamList = store.getItem(`${courseTeam}-${missionValue}`);
  if (teamList === null) {
    renderNotExistTeam(course, mission);
  } else {
    renderExistTeam(course, mission, `${courseTeam}-${missionValue}`);
  }
};

export const makeTeamTemplate = e => {
  e.preventDefault();
  const courseCrew = checkcourseCrew();
  const numberOfPeople = $('#team-member-count-input').value;
  if (
    check.inputValueBlank(numberOfPeople) ||
    check.inputValueNotNum(numberOfPeople) ||
    check.inputValueRange(numberOfPeople, 1) ||
    check.numberSmallerThanCrew(courseCrew)
  ) {
    window.alert(ALERT);
    return;
  }
  makeRandomTeam(checkcourseTeam(), checkMission(), numberOfPeople);
};

export const makeRandomTeam = (course, mission, people) => {
  const crewList = store.getItem(checkcourseCrew());
  const teamPeople = parseInt(people, DECIMAL);
  let targetCourse = $('#course-select');
  const currentCourse = targetCourse.options[targetCourse.selectedIndex].text;
  let targetMission = $('#mission-select');
  const currentMission =
    targetMission.options[targetMission.selectedIndex].text;

  let crewIndexList = [];
  if (crewList === null) {
    return;
  }
  for (let i = 0; i < crewList.length; i++) {
    crewIndexList.push(i);
  }
  const shffledcrewIndexList = MissionUtils.Random.shuffle(crewIndexList);
  const localStorageKey = `${course}-${mission}`;
  let totalTeam = [];
  let start = 0;
  for (let j = 0; j < parseInt(crewList.length / teamPeople, DECIMAL); j++) {
    let newTeam = [];
    for (let i = start; i < start + teamPeople; i++) {
      newTeam.push(crewList[shffledcrewIndexList[i]]);
    }
    start += teamPeople;
    totalTeam.push(newTeam);
  }
  let index = 0;
  for (let i = start; i < crewList.length; i++) {
    totalTeam[index].push(crewList[shffledcrewIndexList[i]]);
    index += 1;
  }
  store.setItem(localStorageKey, totalTeam);
  renderExistTeam(currentCourse, currentMission, localStorageKey);
};

export const checkcourseTeam = () => {
  let target = $('#course-select');
  const course = target.options[target.selectedIndex].text;
  let courseTeam = '';
  if (course === '프론트엔드') {
    courseTeam = 'frontTeam';
  } else {
    courseTeam = 'backTeam';
  }
  return courseTeam;
};

export const checkMission = () => {
  let target = $('#mission-select');
  const mission = target.options[target.selectedIndex].value;
  return mission;
};

export const checkcourseCrew = () => {
  let target = $('#course-select');
  const course = target.options[target.selectedIndex].text;
  let courseCrew = '';
  if (course === '프론트엔드') {
    courseCrew = 'frontCrew';
  } else {
    courseCrew = 'backCrew';
  }
  return courseCrew;
};
