import { templates as $ } from '../view/templates.js';
import { ID, CLASS, COURSE, MISSION, KEY } from '../constants/constants.js';

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
    courses.forEach((course) => course.addEventListener('click', () => this.loadCourseSelectSection(course)));
    $.addCrewButton().addEventListener('click', (e) => this.getCrewNameInput(e));
    this.showCrewTable();
  }

  loadCourseSelectSection(course) {
    this.courseName = course.value;
    if (course.value === 'frontend') {
      this.view.showCourseSelectSection(COURSE.frontendKor);
    } else if (course.value === 'backend') {
      this.view.showCourseSelectSection(COURSE.backendKor);
    }
    $.addCrewButton().addEventListener('click', (e) => this.getCrewNameInput(e));
    this.showCrewTable();
  }

  getCrewNameInput(e) {
    e.preventDefault();
    const crewName = $.crewNameInput().value;
    this.model.addNewCrew(crewName, this.courseName);
    this.model.setLocalStorage(KEY.localKey, this.model.teamObj);
    this.showCrewTable();
  }

  showCrewTable() {
    console.log(this.model.teamObj);
    console.log(this.courseName);
    this.view.clearTarget($.crewTableTbody());
    this.model.teamObj[this.courseName]['crew'].forEach((crewName, index) => {
      this.view.renderTable($.crewTableTbody(), $.crewTableTbodyHTML(index + 1, crewName));
    });
  }

  loadTeamManagerBtnHandler() {
    this.view.showTab($.teamTab());
  }
}
