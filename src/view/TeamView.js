import { $ } from '../utils/DOM.js';
import { TEAM_TEMPLATE } from '../utils/template.js';

export class TeamView {
  constructor() {
    this.$teamMain = $('#team-main');
    this.addElements();
  }

  addElements() {
    this.$teamMain.innerHTML = TEAM_TEMPLATE;
  }
}
