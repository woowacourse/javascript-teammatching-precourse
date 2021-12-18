import Crew from "../Model/Crew.js";
import CrewManageTemplate from "./CrewManageTemplate.js";
import checkCrewName from "./CheckCrewName.js";

export default class CrewManage {
  constructor() {
    this.template = CrewManageTemplate();
    this.mainScreen = document.createElement("main");
    this.mainScreen.innerHTML = this.template;
    document.getElementById("app").append(this.mainScreen);

    this.crew = new Crew();
    this.kindOfCrew = 0;
    this.makeTable();
    this.constructor.hideSection();
    this.connectEvent();
  }

  static hideSection() {
    document.getElementById("detailed_crew_manage").style.visibility = "none";
    document.getElementById("detailed_crew_manage_contents").style.visibility =
      "none";
  }

  connectEvent() {
    if (document.getElementById("frontend-course").checked) {
      this.frontEndCourse();
    }
    if (document.getElementById("backend-course").checked) {
      this.backEndCourse();
    }
    document.getElementById("add-crew-buttton").onclick =
      this.addNewCrew.bind(this);
    const deleteCrewButton = document.getElementsByClassName(
      "delete-crew-buttton"
    );
    if (deleteCrewButton != null) {
      this.deleteCrewEvent(deleteCrewButton);
    }
  }

  frontEndCourse() {
    console.log(1);
    this.kindOfCrew = 0;
    document.getElementById("detailed_crew_manage_title").innerText =
      "프론트엔드 크루 관리";
    document.getElementById("detailed_crew_manage_contents_title").innerText =
      "프론트엔드 크루 목록";
    document.getElementById("detailed_crew_manage").style.visibility = "block";
    document.getElementById("detailed_crew_manage_contents").style.visibility =
      "block";
  }

  backEndCourse() {
    console.log(2);
    this.kindOfCrew = 1;
    document.getElementById("detailed_crew_manage_title").innerText =
      "백엔드 크루 관리";
    document.getElementById("detailed_crew_manage_contents_title").innerText =
      "백엔드 크루 목록";
    document.getElementById("detailed_crew_manage").style.visibility = "block";
    document.getElementById("detailed_crew_manage_contents").style.visibility =
      "block";
  }

  addNewCrew(e) {
    e.preventDefault();
    console.log("버튼누름");
    const name = document.getElementById("crew-name-input").value;
    if (checkCrewName(name) && this.crew.compareName(name, this.kindOfCrew)) {
      this.crew.addNewCrew(name, this.kindOfCrew);
      this.makeTable();
    }
  }

  makeTable() {
    const crewTableBody = document.getElementById("crew-table-body");
    crewTableBody.innerHTML = "";
    const crewMembers = this.crew.getCrew(this.kindOfCrew);
    crewMembers.forEach((name, index) => {
      const crewRow = document.createElement("tr");
      crewRow.innerHTML = `<td>${
        index + 1
      }</td><td>${name}</td><td><button class="delete-crew-buttton">삭제</button></td>`;
      crewTableBody.append(crewRow);
    });
  }

  deleteCrewEvent(deleteCrewButton) {
    for (let i = 0; i < deleteCrewButton.length; i += 1) {
      deleteCrewButton[i].addEventListener("click", (e) =>
        this.deleteCrew(e, i)
      );
    }
  }

  deleteCrew(e, index) {
    e.preventDefault();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      this.crew.deleteCrew(index, this.kindOfCrew);
      this.makeTable();
    }
  }

  tabSection() {
    // return document.getElementById("crew-manage-main");/
    return this.mainScreen;
  }
}
