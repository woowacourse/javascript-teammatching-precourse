import { templates as $ } from '../view/templates.js';
import { ID, CLASS } from '../constants/constants.js';

export default class SubwayView {
  constructor(model, templates) {
    this.model = model;
  }

  renderInTarget(target, html) {
    target.insertAdjacentHTML('beforeend', html);
  }

  hideAllTabs() {
    $.allTab().forEach((tab) => tab.classList.remove(CLASS.show));
  }

  showTab(tab) {
    this.hideAllTabs();
    tab.classList.add(CLASS.show);
  }

  clearTarget(target) {
    if (target) {
      target.innerHTML = '';
    }
  }

  renderTable(table, data) {
    table.insertAdjacentHTML('beforeend', data);
    this.clearInput();
  }

  clearInput() {
    $.crewNameInput().value = '';
  }

  showCourseSelectSection(course) {
    this.clearTarget($.courseSelectSection());
    this.renderInTarget($.courseSelectSection(), $.courseSelectSectionHTML(course));
  }
}
