import { $ } from '../util/dom.js';
import { store } from '../store/store.js';
import { renderNotExistTeam, renderExistTeam } from '../view/renderTeamTab.js';
import { check } from '../util/checkValue.js';
import { ALERT } from '../constants/constants.js';

export const checkExistTeam = e => {
  e.preventDefault();
  let target = $('#course-select');
  const course = target.options[target.selectedIndex].text;
  target = $('#mission-select');
  const mission = target.options[target.selectedIndex].text;

  const courseTeam = checkcourseTeam();
  const teamList = store.getItem(courseTeam);
  if (teamList === null) {
    renderNotExistTeam(course, mission);
  } else {
    renderExistTeam(course, mission);
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
  makeTeam(checkcourseTeam(), checkMission());
};

export const makeTeam = (course, mission) => {};

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
