import TeamMatchingView from '../view/index.js';
import CrewManageView from '../view/CrewManage.js';
import TeamMatchingManageView from '../view/TeamMatchingManage.js';
import TabModel from '../model/Tab.js';
import { $ } from '../utils/dom.js';

import { SELECTOR } from '../constants.js';

class TeamMatchingController {
  constructor() {
    this.$teamMatchingView = new TeamMatchingView();
    this.$crewManageView = new CrewManageView();
    this.$teamMatchingManageView = new TeamMatchingManageView();
    this.$tabModel = new TabModel();

    this.initEventListeners();
  }

  initEventListeners() {
    $(`#${SELECTOR.crewTabButtonId}`).addEventListener('click', this.renderTeamTab.bind(this));
    $(`#${SELECTOR.teamTabButtonId}`).addEventListener('click', this.renderCrewTab.bind(this));
  }

  renderCrewTab() {
    this.$tabModel.setCurrentTab(SELECTOR.crewTabButtonId);
    this.$crewManageView.render();
  }

  renderTeamTab() {
    this.$tabModel.setCurrentTab(SELECTOR.teamTabButtonId);
    this.$teamMatchingManageView.render();
  }
}

export default TeamMatchingController;
