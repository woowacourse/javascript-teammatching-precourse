import {initDOM} from './view/initDOM.js';
import {initCrewManage} from './controller/crewManage.js';
import {initTeamManage} from './controller/teamManage.js';
import {selectCourseDOM} from './view/crewDOM.js';
import {selectMissionDOM} from './view/teamDOM.js';

class TeamMatching {
  constructor() {
    initDOM();
    this.initEventLister();
    initCrewManage();
    initTeamManage();
  }

  initEventLister() {
    const $crewTabButton = document.querySelector('#crew-tab');
    const $teamTabButton = document.querySelector('#team-tab');

    const $crewArea = document.getElementsByClassName('crew');
    const $teamArea = document.getElementsByClassName('team');

    $crewTabButton.addEventListener('click', e => {
      e.preventDefault();
      selectCourseDOM();
      Array.from($teamArea).forEach(node => node.style.display = 'none');
    });

    $teamTabButton.addEventListener('click', e => {
      e.preventDefault();
      selectMissionDOM();
      Array.from($crewArea).forEach(node => node.style.display = 'none');
    });
  }
}

new TeamMatching();
