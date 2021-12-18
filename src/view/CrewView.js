import { $ } from '../utils/DOM.js';
import { CREW_TEMPLATE } from '../utils/template.js';

export class CrewView {
  constructor() {
    this.$crewMain = $('#crew-main');
    this.addElements();
  }

  addElements() {
    this.$crewMain.innerHTML = CREW_TEMPLATE;
  }
}
