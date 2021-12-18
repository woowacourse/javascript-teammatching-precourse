import { crewManage, teamManage } from './dom.js';
import View from './veiw.js';

export default class teamMatching {
  constructor() {
    this.view = new View();
    this.setFixedMenuEventListner();
  }

  setFixedMenuEventListner() {
    this.crewManageButton = document.getElementById('crew-tab');
    this.teamManageButton = document.getElementById('team-tab');

    this.crewManageButton.addEventListener('click', () => this.view.showCrewManage());
    this.teamManageButton.addEventListener('click', () => this.view.showTeamManage());
  }
}

new teamMatching();
