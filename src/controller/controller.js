import { TEMPLATES } from '../view/templates.js';

export default class TeamController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    console.log('Hello world');
    this.model.test();
    this.view.renderInTarget(this.view.$.app(), TEMPLATES.topMenuContainerHTML);
    this.view.renderInTarget(this.view.$.app(), TEMPLATES.crewManagerTabHTML);
    this.view.renderInTarget(this.view.$.app(), TEMPLATES.teamMatchingTabHTML);
    this.loadCrewManagerTab();
    // this.loadTeamManagerTab();
  }

  loadCrewManagerTab() {
    this.view.showTab(this.view.$.crewTab());
  }

  loadTeamManagerTab() {
    this.view.showTab(this.view.$.teamTab());
  }
}
