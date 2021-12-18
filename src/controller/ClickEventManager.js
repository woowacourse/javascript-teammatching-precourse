export default class ClickEventManager {
  constructor(element, controller) {
    this._element = element;
    element.onclick = this.onClick.bind(this);
    this.controller = controller;
  }

  crewTab() {
    console.log('crewTab');
  }

  teamTab() {
    console.log('teamTab');
  }

  onClick(event) {
    event.preventDefault();

    let action = event.target.dataset.action;
    if (action) {
      this[action](event);
    }
  }
}
