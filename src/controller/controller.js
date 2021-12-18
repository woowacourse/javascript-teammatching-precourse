import { templates as $ } from '../view/templates.js';
import { ID, CLASS, COURSE, MISSION } from '../constants/constants.js';

export default class TeamController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
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
    $.addCrewButton().addEventListener('click', (e) => this.getCrewNameInput(e));
  }

  loadCrewManagerBtnHandler() {
    this.view.showTab($.crewTab());
  }

  loadTeamManagerBtnHandler() {
    this.view.showTab($.teamTab());
  }

  getCrewNameInput(e) {
    e.preventDefault();
    console.log($.crewNameInput().value);
  }
}
