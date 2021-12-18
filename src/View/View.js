import Tab from "./template/Tab.js";
import { crewManage, addCrew, crewTable } from "./template/CrewManage.js";
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
    this.main.append(page);
  }

  resetCrewTable() {
    while (this.crewTable.length > 1) {
      this.crewTable.removeChild();
    }
  }

  displayCrewManage() {
    document.getElementById(ID.CREW_TAB).addEventListener("click", () => {
      if (!this.crewManage) {
        this.crewManage = document.createElement("section");
        this.crewManage.innerHTML = crewManage;
      }
      this.resetMain(this.crewManage);
      this.displayCrewTable();
    });
  }

  displayCrewTable() {
    document.getElementById("radio-form").addEventListener("click", (event) => {
      if (event.target.name === "course") {
        if (!this.addCrew) this.addCrew = document.createElement("section");
        this.addCrew.innerHTML = addCrew(event.target.value);
        if (!this.crewTable) {
          this.crewTable = document.createElement("section");
        }
        this.resetCrewTable();
        this.crewTable.innerHTML = crewTable(event.target.value);
        this.main.append(this.addCrew, this.crewTable);
      }
    });
  }
}
