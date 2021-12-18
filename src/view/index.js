import { $ } from '../controller/utils.js';
import { SELECTOR } from '../constants/constants.js';
import { crewManageTemplate, teamMatchingManageTemplate } from '../constants/template.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.app);
    this.renderCrewManageTab();
  }

  renderCrewManageTab() {
    this.$app.insertAdjacentHTML('afterbegin', header);
  }
}
