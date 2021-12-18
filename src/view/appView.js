import { $ } from '../utils/DOMHelper.js';
import { headerTemplate } from '../utils/template.js';

export default class AppView {
  constructor() {
    this.$app = $('#app');
  }

  renderHeader() {
    this.$app.innerHTML = headerTemplate();
  }

  selectHeaderDOM() {
    this.$crewTab = $('#crew-tab');
    this.$teamTab = $('#team-tab');
  }
}
