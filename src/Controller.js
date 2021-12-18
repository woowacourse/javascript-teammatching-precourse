import { CUSTOM_EVENT_NAME, TAB_TYPE } from './constants.js';

export default class Controller {
  constructor({ tabView, crewManagementView, teamManagementView }, store) {
    this.tabView = tabView;
    this.crewManagementView = crewManagementView;
    this.teamManagementView = teamManagementView;

    this.store = store;

    this.clickedTab = store.clickedTab;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.handleTabView();
  }

  handleTabView() {
    this.tabView
      .on(CUSTOM_EVENT_NAME.SHOW_CREW_TAB, () => this.handleShowCrewTab())
      .on(CUSTOM_EVENT_NAME.SHOW_TEAM_TAB, () => this.handleShowTeamTab());
  }

  handleShowCrewTab() {
    this.store.clickedTab = TAB_TYPE.CREW_MANAGEMENT;
    this.render();
  }

  handleShowTeamTab() {
    this.store.clickedTab = TAB_TYPE.TEAM_MANAGEMENT;
    this.render();
  }

  showCrewTab() {
    this.crewManagementView.show();
    this.teamManagementView.hide();
  }

  showTeamTab() {
    this.crewManagementView.hide();
    this.teamManagementView.show();
  }

  hideAllView() {
    this.crewManagementView.hide();
    this.teamManagementView.hide();
  }

  render() {
    this.tabView.show();

    if (this.store.clickedTab === TAB_TYPE.CREW_MANAGEMENT) {
      this.showCrewTab();
    } else if (this.store.clickedTab === TAB_TYPE.TEAM_MANAGEMENT) {
      this.showTeamTab();
    } else {
      this.hideAllView();
    }
  }
}
