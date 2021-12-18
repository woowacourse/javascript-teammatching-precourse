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

  frontendRadioButton(event) {
    console.log('frontendRadioButton');
  }

  backendRadioButton(event) {
    console.log('backendRadioButton');
  }

  onClick(event) {
    event.preventDefault();

    let action = event.target.dataset.action;
    if (action) {
      this[action](event);
    }
  }
}
