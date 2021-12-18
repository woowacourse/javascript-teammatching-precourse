import TeamMatchingView from "./views/TeamMachingView.js";
import Tab from "./Tab.js";

export default class VendingMachine {
  constructor() {
    this.teamMachingView = new TeamMatchingView();
  }

  setMenuClickEvent() {
    const crewTab = document.querySelector("#crew-tab");
    const teamTab = document.querySelector("#team-tab");

    crewTab.addEventListener("click", () => {
      this.tab.manageCrewInitialize();
    });
    teamTab.addEventListener("click", () => {
      this.tab.manageTeamInitialize();
    });
  }

  initTab() {
    this.tab = new Tab();
  }

  initialize() {
    this.teamMachingView.render();
    this.setMenuClickEvent();
    this.initTab();
  }
}
