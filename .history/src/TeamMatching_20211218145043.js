import CrewManageController from "./crewManage/crewManageController.js";
import matchingManageController from "./matchingMange/matchingManageController.js";

export default class TeamMatching {
  constructor() {
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initComponents();
    this.renderCrewManagePage();
  };

  initComponents = () => {
    this.crewManage = new CrewManageController();
    this.matchingManage = new matchingManageController();
  };

  renderCrewManagePage = () => {
    this.crewManage.init();
  };

  renderMatchingManagePage = () => {
    this.matchingManage.init();
  };

  setEvent = () => {
    this.$container.addEventListener("click", this.setClickMenuButtonEvent);
  };

  setClickMenuButtonEvent = ({ target }) => {
    if (target.id === "crew-tab") {
      this.renderCrewManagePage();
    } else if (target.id === "team-tab") {
      this.renderCrewManagePage();
    }
  };
}
