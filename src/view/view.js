import { ID, CLASS } from '../constants/constants.js';

export default class SubwayView {
  constructor(model, templates) {
    this.model = model;
    this.templates = templates;
    this.$ = {
      app: () => document.getElementById(`${ID.app}`),
      teamTab: () => document.querySelector(`.${CLASS.teamTabBox}`),
      crewTab: () => document.querySelector(`.${CLASS.crewTabBox}`),
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
