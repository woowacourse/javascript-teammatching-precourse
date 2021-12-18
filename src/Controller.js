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
    this.crewManagementView.on(CUSTOM_EVENT_NAME.ADD_CREW, (event) =>
      this.handleAddCrew(event),
    ).on(CUSTOM_EVENT_NAME.DELETE_CREW, (event) => 
      this.handleDeleteCrew(event),
    );
  }

  handleAddCrew(event) {
    this.store.addCrew(event.detail.request)
    this.crewManagementView.show(this.store.getCrewList())
  }

  handleDeleteCrew(event) {
    this.store.deleteCrew(event.detail.request);
    this.crewManagementView.show(this.store.getCrewList())
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
    this.crewManagementView.show(this.store.getCrewList());
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
