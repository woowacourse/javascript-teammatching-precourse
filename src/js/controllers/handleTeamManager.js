import { backTeam, frontTeam } from '../../../data.js';
import { ERROR } from '../utils/constants.js';
import { findTeam, matchTeam, getSelectCourse, getSelectMission } from '../models/teamManagerModel.js';
import { renderExistTeam, renderMatchTeam, resetMeberCountInput } from '../views/teamManagerView.js';
import alertError from '../views/alertError.js';
import store from '../utils/store.js';
import $ from '../utils/dom.js';

export default function HandleTeamManager() {
  this.backTeam = backTeam;
  this.frontTeam = frontTeam;
  this.course = '';
  this.mission = '';

  this.init = () => {
    if (store.getLocalStorage('BackTeam')) {
      this.backTeam = store.getLocalStorage('BackTeam');
    }
    if (store.getLocalStorage('FrontTeam')) {
      this.frontTeam = store.getLocalStorage('FrontTeam');
    }
  };

  const isExistTeam = () => {
    if (this.course === 'frontend') {
      return findTeam(this.frontTeam, this.mission);
    }
    if (this.course === 'backend') {
      return findTeam(this.backTeam, this.mission);
    }
  };

  const isValidMemberCount = memberCount => {
    if (memberCount === '') {
      return alertError(ERROR.NOT_INPUT_MEMBER_COUNT);
    }
    if (Number(memberCount) < 1) {
      return alertError(ERROR.INPUT_MEMBER_COUNT_LEAST_ONE);
    }
    return true;
  };

  $('#show-team-matcher-button').addEventListener('click', e => {
    e.preventDefault();

    this.course = $('#course-select').value;
    this.mission = $('#mission-select').value;
    const selectCourse = getSelectCourse();
    const selectMission = getSelectMission();

    if (isExistTeam()) {
      renderExistTeam(selectCourse, selectMission); // 구현
      return;
    }
    renderMatchTeam(this.course, selectMission);
  });

  $('#team-result-wrapper').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.id === 'match-team-button') {
      const memberCount = $('#team-member-count-input').value;
      if (isValidMemberCount(memberCount)) {
        matchTeam(this.course, this.mission, Number(memberCount));
      }
      resetMeberCountInput();
    }
  });

  this.init();
}
