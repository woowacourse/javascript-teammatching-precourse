import HeaderTemplate from "./HeaderTemplate.js";
import CrewManage from "./CrewManage/CrewManage.js";
import TeamManage from "./TeamTab/TeamManage.js";

export default class Woowacourse {
  constructor() {
    this.constructor.makeHeader();
    this.makeMain();
    this.connectEvent();
  }

  static makeHeader() {
    document.getElementById("app").innerHTML = HeaderTemplate();
  }

  connectEvent() {
    document.getElementById("crew-tab").onclick = this.crewTabView.bind(this);
    document.getElementById("team-tab").onclick = this.teamTabView.bind(this);
  }

  makeMain() {
    this.crewManage = new CrewManage();
    this.teamManage = new TeamManage();
    this.crewManageScreen = this.crewManage.tabSection();
    this.teamManageScreen = this.teamManage.tabSection();
    this.crewManageScreen.style.display = "none";
    this.teamManageScreen.style.display = "none";
  }

  crewTabView(e) {
    e.preventDefault();
    this.crewManageScreen.style.display = "block";
    this.teamManageScreen.style.display = "none";
  }

  teamTabView(e) {
    e.preventDefault();
    this.crewManageScreen.style.display = "none";
    this.teamManageScreen.style.display = "block";
  }
}

const woowacourse = new Woowacourse();
