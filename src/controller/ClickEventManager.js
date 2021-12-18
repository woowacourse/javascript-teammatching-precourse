import { $, default as DOM } from '../utils/DOMUtils.js';
import { default as DB } from '../model/database.js';

export default class ClickEventManager {
  constructor(element, controller) {
    this._element = element;
    element.onclick = this.onClick.bind(this);
    this.controller = controller;
  }

  crewTab(event) {
    this.controller.handleMenuClick(event);
  }

  teamTab(event) {
    this.controller.handleMenuClick(event);
  }

  frontendRadioButton() {
    DOM.showModuleComponent('#crew-manager-component', '프론트엔드');

    $('#frontend-course').setAttribute('checked', 'checked');
    $('#backend-course').removeAttribute('checked');

    DOM.showCrewList(DOM.getCourseType());
  }

  backendRadioButton() {
    DOM.showModuleComponent('#crew-manager-component', '백엔드');

    $('#backend-course').setAttribute('checked', 'checked');
    $('#frontend-course').removeAttribute('checked');

    DOM.showCrewList(DOM.getCourseType());
  }

  createCrew() {
    let courseType = DOM.getCourseType();

    DB.save(`${courseType}Crew`, $('#crew-name-input').value);

    $('#crew-name-input').value = '';

    DOM.showCrewList(courseType);
  }

  onClick(event) {
    event.preventDefault();

    let action = event.target.dataset.action;
    if (action) {
      this[action](event);
    }
  }
}
