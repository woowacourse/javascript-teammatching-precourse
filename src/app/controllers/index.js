import { DOM, TAB } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';
import CrewManageController from './CrewManageController.js';

class TeamMatchingController {
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
    }
  }

  renderCrewManageMenu() {
    this.$view.renderCrewManageMenu({ inputs: this.$inputsModel.getCrewInputsModel() });
  }

  bindCrewManageMenuController() {
    this.$controller = new CrewManageController({
      view: this.$view.mainSection,
      inputsModel: this.$inputsModel,
    });
  }

  renderTeamMatchingMenu() {
    this.$view.renderTeamMatchingMenu();
  }
}
export default TeamMatchingController;
