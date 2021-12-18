import Tab from "./template/Tab.js";
import { crewManage } from "./template/CrewManage.js";
import { ID } from "../constant/constant.js";

export default class View {
  constructor() {
    this.app = document.getElementById("app");
    this.header = document.createElement("header");
    this.header.innerHTML = Tab;
    this.main = document.createElement("main");
    this.app.append(this.header, this.main);
  }

  resetMain(page) {
    while (this.main.children.length > 1) {
      this.main.removeChild();
    }
    this.main.innerHTML = page;
  }

  displayCrewManage() {
    document.getElementById(ID.CREW_TAB).addEventListener("click", () => {
      this.resetMain(crewManage);
    });
  }
}
