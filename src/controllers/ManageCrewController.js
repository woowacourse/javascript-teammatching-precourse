import { setData, getData } from "../utils/localStorage.js";
import { isExistProductName } from "../utils/validation.js";
import ManageCrewView from "../views/ManageCrewView.js";

export default class ManageCrewController {
  constructor() {
    this.main = document.querySelector("#content-container");
    this.manageCrewView = new ManageCrewView();
  }

  initialize() {
    this.frontend = getData("frontend");
    this.backend = getData("backend");
    this.radioClickEvent();
    this.deleteEvent();
  }

  radioClickEvent() {
    const frontendRadio = document.querySelector("#frontend-course");
    const backendRadio = document.querySelector("#backend-course");
    frontendRadio.addEventListener(
      "click",
      this.onClickFrontendRadio.bind(this)
    );
    backendRadio.addEventListener("click", this.onClickBackendRadio.bind(this));
  }

  onClickFrontendRadio() {
    if (this.frontend === null) {
      setData("frontend", []);
    }
    const front = document.querySelectorAll(".front");
    const back = document.querySelectorAll(".back");
    front.forEach((ele) => {
      ele.style.display = "block";
    });
    back.forEach((ele) => {
      ele.style.display = "none";
    });
    const frontendAddBtn = document.querySelector(
      "section.front #add-crew-buttton"
    );
    frontendAddBtn.addEventListener("click", this.addFrontCrew.bind(this));
  }

  onClickBackendRadio() {
    if (this.backend === null) {
      setData("backend", []);
    }
    const front = document.querySelectorAll(".front");
    const back = document.querySelectorAll(".back");
    front.forEach((ele) => {
      ele.style.display = "none";
    });
    back.forEach((ele) => {
      ele.style.display = "block";
    });
    const backendAddBtn = document.querySelector(
      "section.back #add-crew-buttton"
    );
    backendAddBtn.addEventListener("click", this.addBackCrew.bind(this));
  }

  addFrontCrew(event) {
    event.preventDefault();
    let frontendCrew = getData("frontend");
    const crewInputValue = document.querySelector(
      ".front #crew-name-input"
    ).value;
    if (!isExistProductName(getData("frontend"), crewInputValue)) return;
    frontendCrew.push(crewInputValue);
    setData("frontend", frontendCrew);
    this.manageCrewView.render();
  }

  addBackCrew(event) {
    event.preventDefault();
    let backendCrew = getData("backend");
    const crewInputValue = document.querySelector(
      ".back #crew-name-input"
    ).value;
    if (!isExistProductName(getData("backend"), crewInputValue)) return;
    backendCrew.push(crewInputValue);
    setData("backend", backendCrew);
    this.manageCrewView.render();
  }

  deleteEvent(course, deleteCrew) {
    const updateCrew = this.crew[course].filter((name) => name !== deleteCrew);
    const newCrew = this.crew;
    newCrew[course] = updateCrew;
    this.setCrew(newCrew);
  }
}
