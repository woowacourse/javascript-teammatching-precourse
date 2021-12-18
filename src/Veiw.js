import { tabMenu, crewManage, teamManage } from './dom.js';

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
  }

  showTeamManage() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', teamManage);
  }
}
