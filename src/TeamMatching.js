import TeamMatchingView from './views/TeamMatchingView.js';
import CrewTab from './controllers/CrewTab.js';
import TeamTab from './controllers/TeamTab.js';

export default class TeamMatching {
  constructor() {
    this.view = new TeamMatchingView();
  }

  initialize() {
    this.view.initialRender();
    this.initTabs();
    this.initElements();
    this.setEvent();
  }

  initTabs() {
    this.crewTab = new CrewTab();
    this.teamTab = new TeamTab();
  }

  initElements() {
    this.crewTabButton = document.querySelector('#crew-tab');
    this.teamTabButton = document.querySelector('#team-tab');
  }

  setEvent() {
    this.crewTabButton.addEventListener('click', () => { this.crewTab.initialize(); });
    this.teamTabButton.addEventListener('click', () => { this.teamTab.initialize(); });
  }
}
