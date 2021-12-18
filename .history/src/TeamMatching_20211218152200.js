import CrewManageController from "./crewManage/crewManageController.js";
import matchingManageController from "./matchingMange/matchingManageController.js";

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
    const template = `
      <header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>
        <ul>
          <li>
            <button id="crew-tab">크루 관리</button>
          </li>
          <li>
            <button id="team-tab">팀 매칭 관리</button>
          </li>
        </ul>
      </nav>
    </header>
    `;
    this.$container.insertAdjacentHTML("beforeend", template);
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
