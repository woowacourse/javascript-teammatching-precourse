import { $App } from '../data/domElement.js';
import TabMenu from '../components/tabMenu.js';
import CrewTab from '../components/tab/crewTab.js';
import TeamTab from '../components/tab/teamTab.js';

export default class TabMenuController {
  constructor() {
    this.init();
  }

  init() {
    this.createView();
    this.renderInitPage();
    this.appendTabMenuItems();
  }

  setEvent() {
    $App.addEventListener('click', this.handleClickTab.bind(this));
  }
  createView() {
    this.tabMenu = new TabMenu();
    this.crewTab = new CrewTab();
    this.teamTab = new TeamTab();
  }

  renderInitPage() {
    $App.insertAdjacentHTML('beforeend', this.tabMenu.template);
  }

  appendTabMenuItems() {
    $App.append(this.crewTab.$main);
    $App.append(this.teamTab.$main);
  }
}
