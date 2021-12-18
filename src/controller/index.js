import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.renderCrewManageTab();
  }

  addEventListeners() {
    $(SELECTOR.crewManageButton).addEventListener('click', () => this.renderCrewManageTab());
    $(SELECTOR.teamManageButton).addEventListener('click', () =>
      this.renderTeamMatchingManageTab(),
    );
  }

  renderCrewManageTab() {
    this.view.renderCrewManageTab();
  }

  renderTeamMatchingManageTab() {
    this.view.renderTeamMatchingManageTab();
  }
}
