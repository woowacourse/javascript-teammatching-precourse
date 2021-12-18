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
    this.loadCrewManagerTab();
  }

  setEventListeners() {
    document.getElementById(`${ID.crewTabButton}`).addEventListener('click', () => this.loadCrewManagerTab());
    document.getElementById(`${ID.teamTabButton}`).addEventListener('click', () => this.loadTeamManagerTab());
  }

  loadCrewManagerTab() {
    this.view.showTab($.crewTab());
  }

  loadTeamManagerTab() {
    this.view.showTab($.teamTab());
  }
}
