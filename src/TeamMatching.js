import CrewManageController from "./crewManage/crewManageController.js";
import matchingManageController from "./matchingMange/matchingManageController.js";
import { INIT_TEMPLATE } from "./template/init-template.js";

export default class TeamMatching {
  constructor() {
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
    this.initComponents();
    this.renderCrewManagePage();
    this.setEvent();
  };

  initPage = () => {
    this.$container.insertAdjacentHTML("beforeend", INIT_TEMPLATE);
  };

  initComponents = () => {
    this.crewManage = new CrewManageController();
    this.matchingManage = new matchingManageController(this.crewManage);
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
      this.resetPage();
      this.renderCrewManagePage();
    } else if (target.id === "team-tab") {
      this.resetPage();
      this.renderMatchingManagePage();
    }
  };

  resetPage = () => {
    this.$container.innerHTML = "";
    this.initPage();
  };
}
