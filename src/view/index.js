import { $ } from '../controller/utils.js';
import { SELECTOR } from '../constants/constants.js';
import {
  headerTemplate,
  crewManageTemplate,
  teamMatchingManageTemplate,
  crewInputAndTableTemplate,
} from '../constants/template.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.app);
    this.renderHeader();
    this.$container = $(SELECTOR.container);
  }

  clearContainer() {
    this.$container.innerHTML = '';
  }

  renderHeader() {
    this.$app.insertAdjacentHTML('afterbegin', headerTemplate);
  }

  renderCrewManageTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', crewManageTemplate);
  }

  renderTeamMatchingManageTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', teamMatchingManageTemplate);
  }

  renderSelectedCourseContents(course) {
    $(SELECTOR.selectedCourseContents).innerHTML = '';
    $(SELECTOR.selectedCourseContents).insertAdjacentHTML(
      'afterbegin',
      crewInputAndTableTemplate(course),
    );
  }
}
