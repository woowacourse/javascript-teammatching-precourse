import { $ } from '../controller/utils.js';
import { SELECTOR } from '../constants/constants.js';
import {
  headerTemplate,
  crewManageTemplate,
  teamMatchingManageTemplate,
  crewInputAndTableTemplate,
  teamMatchingSettingTemplate,
} from '../constants/template.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.app);
    this.renderHeader();
    this.$container = $(SELECTOR.container);
  }

  getTable() {
    return document.querySelector('tbody');
  }

  addOptionsInSelect(select, options) {
    options.forEach(option => {
      const optionTag = document.createElement('option');
      optionTag.innerHTML = option.name;
      optionTag.value = option.value;
      select.appendChild(optionTag);
    });
  }

  clearTable(table) {
    table.innerHTML = '';
  }

  clearInput(input) {
    input.value = '';
  }

  addTableHeader(table, headerForm) {
    table.insertAdjacentHTML('beforeend', headerForm);
  }

  addTableRow(table, rowForm) {
    table.insertAdjacentHTML('beforeend', rowForm);
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

  renderTeamMatchingSettingTemplate(course, mission) {
    $(SELECTOR.teamCourseAndMissionContents).innerHTML = '';
    $(SELECTOR.teamCourseAndMissionContents).insertAdjacentHTML(
      'afterbegin',
      teamMatchingSettingTemplate(course, mission),
    );
  }
}
