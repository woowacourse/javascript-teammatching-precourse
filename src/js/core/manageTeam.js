import { $ } from '../util/dom.js';
import { store } from '../store/store.js';
import { renderNotExistTeam, renderExistTeam } from '../view/renderTeamTab.js';
import { check } from '../util/checkValue.js';
import { ALERT } from '../constants/constants.js';

export const checkExistTeam = e => {
  e.preventDefault();
  const course = $('#select-course').value;
  const courseTeam = checkcourseTeam();
  const teamList = store.getItem(courseTeam);
  if (teamList === null) {
    renderNotExistTeam(course);
  } else {
    renderExistTeam(course);
  }
};

export const makeTeamTemplate = e => {
  e.preventDefault();
  const courseCrew = checkcourseCrew();
  const numberOfPeople = $('#number-of-people-per-team-input').value;
  if (
    check.inputValueBlank(numberOfPeople) ||
    check.inputValueNotNum(numberOfPeople) ||
    check.inputValueRange(numberOfPeople, 1) ||
    check.numberSmallerThanCrew(courseCrew)
  ) {
    window.alert(ALERT);
    return;
  }
};

export const checkcourseTeam = () => {
  const course = $('#select-course').value;
  let courseTeam = '';
  if (course === '프론트엔드') {
    courseTeam = 'frontTeam';
  } else {
    courseTeam = 'backTeam';
  }
  return courseTeam;
};

export const checkcourseCrew = () => {
  const course = $('#select-course').value;
  let courseCrew = '';
  if (course === '프론트엔드') {
    courseCrew = 'frontCrew';
  } else {
    courseCrew = 'backCrew';
  }
  return courseCrew;
};
