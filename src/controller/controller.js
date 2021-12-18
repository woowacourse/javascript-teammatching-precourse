import { templates as $ } from '../view/templates.js';
import { ID, CLASS, COURSE, MISSION, KEY, MESSAGE } from '../constants/constants.js';

export default class TeamController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.courseName = COURSE.frontend;
  }

  app() {
    this.view.renderInTarget($.app(), $.topMenuContainerHTML);
    this.view.renderInTarget($.app(), $.crewManagerTabHTML);
    this.view.renderInTarget($.app(), $.teamMatchingTabHTML);
    this.setEventListeners();
    this.model.loadAllDataFromLocalStorage();
    this.loadCrewManagerBtnHandler();
  }

  setEventListeners() {
    $.crewTabButton().addEventListener('click', () => this.loadCrewManagerBtnHandler());
    $.teamTabButton().addEventListener('click', () => this.loadTeamManagerBtnHandler());
  }

  loadCrewManagerBtnHandler() {
    this.view.showCourseSelectSection(COURSE.frontendKor);
    this.view.showTab($.crewTab());
    const courses = document.getElementsByName(COURSE.course);
    courses.forEach((course) =>
      course.addEventListener('click', () => {
        this.courseName = course.value;
        this.loadCourseSelectSection(course);
      }),
    );
    $.addCrewButton().addEventListener('click', (e) => this.getCrewNameInput(e));
    this.showCrewTable();
  }

  loadCourseSelectSection() {
    if (this.courseName === 'frontend') {
      this.view.showCourseSelectSection(COURSE.frontendKor);
    } else if (this.courseName === 'backend') {
      this.view.showCourseSelectSection(COURSE.backendKor);
    }
    $.addCrewButton().addEventListener('click', (e) => this.getCrewNameInput(e));
    this.showCrewTable();
  }

  getCrewNameInput(e) {
    e.preventDefault();
    const crewName = $.crewNameInput().value;
    if (this.checkCrewBeforeRegister(crewName)) {
      return;
    }
    this.model.addNewCrew(crewName, this.courseName);
    this.model.setLocalStorage(KEY.localKey, this.model.teamObj);
    this.showCrewTable();
  }

  checkCrewBeforeRegister(crewName) {
    if (crewName.length > 5 || crewName.length < 1) {
      alert(MESSAGE.alertOfLongName);
      return true;
    }
    if (this.model._teamObj[this.courseName]['crew'].includes(crewName)) {
      alert(MESSAGE.alertOfSameName);
      return true;
    }
  }

  showCrewTable() {
    console.log(this.model.teamObj);
    console.log(this.courseName);
    this.view.clearTarget($.crewTableTbody());
    this.model._teamObj[this.courseName]['crew'].forEach((crewName, index) => {
      this.view.renderTable($.crewTableTbody(), $.crewTableTbodyHTML(index + 1, crewName));
    });
    $.deleteCrewButtons().forEach((button) =>
      button.addEventListener('click', (event) => this.deleteCrewButtonHandler(event)),
    );
  }
  deleteCrewButtonHandler(event) {
    if (window.confirm(MESSAGE.confirmDeleteCrew)) {
      const index = event.target.parentElement.parentElement.childNodes[1].innerText - 1;
      const crewName = event.target.parentElement.parentElement.childNodes[3].innerText;
      this.model.deleteCrewData(this.courseName, index);
      console.log(this.model.teamObj);
      this.loadCourseSelectSection();
    }
  }

  loadTeamManagerBtnHandler() {
    this.view.showTab($.teamTab());
  }
}
