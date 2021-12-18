import { tabMenu, crewManage, teamManage } from './dom.js';
import { initCrewManage } from './crewManage.js';
import { initTeamMatch } from './teamMatching.js';

export default class View {
  constructor() {
    this.$app = document.getElementById('app');
    this.$app.insertAdjacentHTML('afterbegin', tabMenu);
  }

  clearMenu() {
    document.getElementById('container').innerHTML = '';
  }

  showCrewManage() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', crewManage);
    initCrewManage();
  }

  showTeamManage() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', teamManage);
    initTeamMatch();
  }
}
