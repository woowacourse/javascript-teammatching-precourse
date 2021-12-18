import { $ } from '../controller/utils.js';
import { SELECTOR } from '../constants/constants.js';
import {
  headerTemplate,
  crewManageTemplate,
  teamMatchingManageTemplate,
} from '../constants/template.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.app);
    this.renderHeader();
    this.$container = $(SELECTOR.container);
  }

  renderHeader() {
    this.$app.insertAdjacentHTML('afterbegin', headerTemplate);
  }

  renderCrewManageTab() {
    this.$container.insertAdjacentHTML('afterbegin', crewManageTemplate);
  }
}
