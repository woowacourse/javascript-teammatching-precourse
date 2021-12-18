import { templates as $ } from '../view/templates.js';
import { ID, CLASS, COURSE, MISSION } from '../constants/constants.js';

export default class TeamController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.course;
  }

  app() {
    this.view.renderInTarget($.app(), $.topMenuContainerHTML);
    this.view.renderInTarget($.app(), $.crewManagerTabHTML);
    this.view.renderInTarget($.app(), $.teamMatchingTabHTML);
    this.setEventListeners();
    this.loadCrewManagerBtnHandler();
  }

  setEventListeners() {
    $.crewTabButton().addEventListener('click', () => this.loadCrewManagerBtnHandler());
    $.teamTabButton().addEventListener('click', () => this.loadTeamManagerBtnHandler());
  }

  loadCrewManagerBtnHandler() {
    this.view.showCourseSelectSection(COURSE.frontendKor);
    $.addCrewButton().addEventListener('click', (e) => this.getCrewNameInput(e));
    this.view.showTab($.crewTab());
    const courses = document.getElementsByName(COURSE.course);

    courses.forEach((course) => course.addEventListener('click', () => this.convertRadioIdToName(course)));
  }

  convertRadioIdToName(course) {
    this.course = course.value;
    if (course.value === 'frontend') {
      this.view.showCourseSelectSection(COURSE.frontendKor);
    } else if (course.value === 'backend') {
      this.view.showCourseSelectSection(COURSE.backendKor);
    }
  }

  loadTeamManagerBtnHandler() {
    this.view.showTab($.teamTab());
  }

  getCrewNameInput(e) {
    e.preventDefault();
    const crewName = $.crewNameInput().value;

    const order = 1;
    this.view.renderTable($.crewTableTbody(), $.crewTableTbodyHTML(order, crewName));
  }
}
