import CrewManageController from "./crewManage/crewManageController.js";

export default class TeamMatching {
  constructor() {
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initComponents();
  };

  initComponents = () => {
    this.crewManage = new CrewManageController();
  };

  renderCrewManagePage = () => {
    this.crewManage.init();
  };

  setEvent = () => {
    this.$container.addEventListener("click", this.setClickMenuButtonEvent);
  };

  setClickMenuButtonEvent = ({ target }) => {
    if (target.id === "crew-tab") {
    }
  };
}
