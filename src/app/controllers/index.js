import { DOM, TAB } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';
import CrewManageController from './CrewManageController.js';

import TeamMatchingController from './TeamMatchingController.js';
class Controller {
  constructor(view, model) {
    this.$view = view;
    this.$model = model;

    this.initializeModels();
    this.bindEventHandler();
    this.mountCourseSection();
  }

  initializeModels() {
    this.$globalModel = this.$model.getGlobalModel();
    this.$inputsModel = this.$model.getInputsModel();
    this.$crewModel = this.$model.getCrewModel();
    this.$teamModel = this.$model.getTeamModel();
  }

  bindEventHandler() {
    $(DOM.TAB_LIST_ID).addEventListener('click', this.onClickTab.bind(this));
  }

  onClickTab(e) {
    const {
      target: { textContent },
    } = e;

    this.mutateModelByNewTab(textContent);
    this.mountCourseSection();
  }

  mutateModelByNewTab(tab) {
    this.$globalModel.setTab(tab);
  }

  mountCourseSection() {
    const tab = this.$globalModel.getTab();
    if (tab === TAB.CREW) {
      this.renderCrewManageMenu();
      this.bindCrewManageMenuController();
    }
    if (tab === TAB.TEAM) {
      this.renderTeamMatchingMenu();
      this.bindTeamMatchingMenuController();
    }
  }

  renderCrewManageMenu() {
    this.$view.renderCrewManageMenu({
      inputs: this.$inputsModel.getCrewInputsModel(),
      frontendCrewList: this.$crewModel.getFrontendCrewList(),
      backendCrewList: this.$crewModel.getBackendCrewList(),
    });
  }

  bindCrewManageMenuController() {
    this.$controller = new CrewManageController({
      view: this.$view.mainSection,
      inputsModel: this.$inputsModel,
      crewModel: this.$crewModel,
    });
  }

  renderTeamMatchingMenu() {
    this.$view.renderTeamMatchingMenu();
  }

  bindTeamMatchingMenuController() {
    this.$controller = new TeamMatchingController({
      view: this.$view.mainSection,
      inputsModel: this.$inputsModel,
      crewModel: this.$crewModel,
      teamModel: this.$teamModel,
    });
  }
}
export default Controller;
