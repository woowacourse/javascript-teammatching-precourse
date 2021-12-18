import { ID, CLASS } from '../constants/constants.js';

export default class SubwayView {
  constructor(model, templates) {
    this.model = model;
    this.templates = templates;
    this.$ = {
      app: () => document.getElementById(`${ID.app}`),
      crewTab: () => document.querySelector(`.${CLASS.crewTabBox}`),
      teamTab: () => document.querySelector(`.${CLASS.teamTabBox}`),
      allTab: () => document.querySelectorAll(`.${tab}`),
    };
  }

  renderInTarget(target, html) {
    target.insertAdjacentHTML('beforeend', html);
  }

  hideAllTabs() {
    this.$.allTab().forEach((tab) => tab.classList.remove(CLASS.show));
  }

  showTab(tab) {
    tab.classList.add(CLASS.show);
  }

  clearTarget(target) {
    if (target) {
      target.innerHTML = '';
    }
  }
}
