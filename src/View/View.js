import Tab from "./template/Tab.js";
import { crewManage, addCrew, crewTable } from "./template/CrewManage.js";
import { ID } from "../constant/constant.js";

export default class View {
  constructor() {
    this.app = document.getElementById("app");
    this.header = document.createElement("header");
    this.header.innerHTML = Tab;
    this.main = document.createElement("main");
    this.main.id = "main";
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

  displayCrewManage(crews) {
    document.getElementById(ID.CREW_TAB).addEventListener("click", () => {
      if (!this.crewManage) {
        this.crewManage = document.createElement("section");
        this.crewManage.innerHTML = crewManage;
      }
      this.resetMain(this.crewManage);
      this.displayCrewForm(crews);
    });
  }

  displayCrewForm(crews) {
    document.getElementById("main").addEventListener("click", (event) => {
      if (event.target.name === "course") {
        if (!this.addCrew) this.addCrew = document.createElement("section");
        this.addCrew.innerHTML = addCrew(event.target.value);
        if (!this.crewTable) {
          this.crewTable = document.createElement("section");
        }
        this.resetCrewTable();
        if (event.target.value === "frontend")
          this.displayCrewTable(event.target.value, crews.front);
        else this.displayCrewTable(event.target.value, crews.back);
        this.main.append(this.addCrew, this.crewTable);
      }
    });
  }

  displayCrewTable(course, crew) {
    this.crewTable.innerHTML = crewTable(course, crew);
  }

  bindAddCrew(handler) {
    this.main.addEventListener("click", (event) => {
      if (event.target.id === ID.ADD_BUTTON) {
        handler(
          document.getElementById(ID.INPUT).value,
          document.querySelector("input[name=course]:checked").value
        );
        document.getElementById(ID.INPUT).value = "";
      }
    });
  }

  bindDeleteCrew(handler) {
    this.main.addEventListener("click", (event) => {
      if (event.target.id === ID.DELETE_BUTTON) {
        handler(
          event.target.parentNode.parentNode.children[0].textContent,
          document.querySelector("input[name=course]:checked").value
        );
      }
    });
  }
}
