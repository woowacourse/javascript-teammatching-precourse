import { $, default as DOM } from '../utils/DOMUtils.js';

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
  }

  backendRadioButton() {
    DOM.showModuleComponent('#crew-manager-component', '백엔드');

    $('#backend-course').setAttribute('checked', 'checked');
    $('#frontend-course').removeAttribute('checked');
  }

  createCrew() {
    console.log(document.querySelector('input[name="course"]:checked').value);
  }

  onClick(event) {
    event.preventDefault();

    let action = event.target.dataset.action;
    if (action) {
      this[action](event);
    }
  }
}
