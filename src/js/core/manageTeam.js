import { $ } from '../util/dom.js';
import { store } from '../store/store.js';
import { renderNotExistTeam } from '../view/renderTeamTab.js';

export const checkExistTeam = e => {
  e.preventDefault();
  const course = $('#select-course').value;
  let courseTeam = '';
  if (course === '프론트엔드') {
    courseTeam = 'frontTeam';
  } else {
    courseTeam = 'backTeam';
  }
  const teamList = store.getItem(courseTeam);
  if (teamList === null) {
    renderNotExistTeam(course);
  }
};
