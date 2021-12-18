import { $ } from '../utils/DOM.js';
import { APP_TEMPLATE } from '../utils/template.js';
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
    this.$nav = $('#app > nav');
    this.$crewTab = $('#crew-tab');
    this.$teamTab = $('#team-tab');
  }
}
