import AppModel from '../model/appModel.js';
import AppView from '../view/appView.js';
import CrewManageController from './crewManageController/crewManageController.js';
import TeamMatchController from './teamMatchController/teamMatchController.js';

export default class AppController {
  constructor() {
    this.view = new AppView();
    this.model = new AppModel();

    this.crewManageController = new CrewManageController(this.model);
    this.teamMatchController = new TeamMatchController(this.model);

    this.init();
  }

  init() {
    this.view.renderHeader();
    this.view.selectHeaderDOM();

    this.renderTab();
    this.attachEvents();
  }

  renderTab() {
    if (this.model.currentTab === 'teamMatch') return this.teamMatchController.init();

    return this.crewManageController.init();
  }

  attachEvents() {
    this.view.$crewTab.addEventListener('click', this.changeToCrewTab.bind(this));
    this.view.$teamTab.addEventListener('click', this.changeToTeamTab.bind(this));
  }

  changeToCrewTab(e) {
    e.preventDefault();

    this.crewManageController.init();
    this.model.setCurrentTab('crewManage');
  }

  changeToTeamTab(e) {
    e.preventDefault();

    this.teamMatchController.init();
    this.model.setCurrentTab('teamMatch');
  }
}
