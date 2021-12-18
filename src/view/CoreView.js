import { CrewView } from './CrewView.js';
import { TeamView } from './TeamView.js';

export class CoreView {
  constructor() {
    this.$app = $('#app');
    this.addCommonElements();
    this.crewView = new CrewView();
    this.teamView = new TeamView();
  }

  addCommonElements() {
    this.$app.innerHTML = APP_TEMPLATE;
  }
}
