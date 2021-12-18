import { $ } from '../controller/utils.js';
import { SELECTOR, KEY_VALUE } from '../constants/constants.js';
import {
  headerTemplate,
  crewManageTemplate,
  teamMatchingManageTemplate,
  crewInputAndTableTemplate,
  teamMatchingSettingTemplate,
  teamMatchingResultTemplate,
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

  clearTeamCourseAndMissionContents() {
    $(SELECTOR.teamCourseAndMissionContents).innerHTML = '';
  }

  renderTeamMatchingSettingTemplate(course, mission, crewList) {
    $(SELECTOR.teamCourseAndMissionContents).innerHTML = '';
    $(SELECTOR.teamCourseAndMissionContents).insertAdjacentHTML(
      'afterbegin',
      teamMatchingSettingTemplate(KEY_VALUE[course], KEY_VALUE[mission]),
    );
    this.addListInUL($(SELECTOR.teamMatchCrewList), crewList);
  }

  addListInUL(ul, list) {
    list.forEach(crew => {
      const liTag = document.createElement('li');
      liTag.innerHTML = crew;
      ul.appendChild(liTag);
    });
  }

  addListInResultUL(ul, list) {
    const liTag = document.createElement('li');
    liTag.innerHTML = list.join(',');
    ul.appendChild(liTag);
  }

  renderAlreadyMatchingTemplate(course, mission, member) {
    $(SELECTOR.teamCourseAndMissionContents).innerHTML = '';
    $(SELECTOR.teamCourseAndMissionContents).insertAdjacentHTML(
      'afterbegin',
      teamMatchingResultTemplate(course, mission),
    );
    member.forEach(team => this.addListInResultUL($(SELECTOR.matchResult), team));
  }
}
