import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import CrewManager from './crewManageController.js';
import TeamMatchManager from './teamMatchManageController.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.crewManager = new CrewManager(this.view, this.model);
    this.teamMatchManager = new TeamMatchManager(this.view, this.model);
    this.renderCrewManageTab();
  }

  addEventListeners() {
    $(SELECTOR.crewManageButton).addEventListener('click', () => this.renderCrewManageTab());
    $(SELECTOR.teamManageButton).addEventListener('click', () =>
      this.renderTeamMatchingManageTab(),
    );
  }

  renderCrewManageTab() {
    this.view.renderCrewManageTab();
    this.crewManager.init();
  }

  renderTeamMatchingManageTab() {
    this.view.renderTeamMatchingManageTab();
    this.teamMatchManager.init();
  }
}
