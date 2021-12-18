import { backTeam, frontTeam } from '../../../data.js';
import findTeam from '../models/teamManagerModel.js';
import { renderExistTeam, renderMatchTeam } from '../views/teamManagerView.js';
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

  $('#show-team-matcher-button').addEventListener('click', e => {
    e.preventDefault();

    this.course = $('#course-select').value;
    this.mission = $('#mission-select').value;
    if (isExistTeam()) {
      renderExistTeam(this.course); // 구현
      return;
    }
    renderMatchTeam(this.course);
  });

  this.init();
}
