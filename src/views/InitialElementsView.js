import { SELECTOR, TAB_LABEL, TAB_TYPE } from '../constants.js';
import { qs } from '../utils/index.js';

export default class InitialElementsView {
  constructor() {
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    const app = qs(`#${SELECTOR.APP}`);
    app.innerHTML = this.template.getTabButtons();
  }
}

class Template {
  getTabButtons() {
    return `<header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav id="${SELECTOR.TAB_BUTTONS}">
      <ul>
        ${Object.values(TAB_TYPE)
          .map((tabType) => ({ tabType, tabLabel: TAB_LABEL[tabType] }))
          .map(this.getTabButton)
          .join('')}
      </ul>
      </nav>
      <main id="${SELECTOR.CREW_MANAGEMENT_VIEW}"></main>
      <main id="${SELECTOR.TEAM_MANAGEMENT_VIEW}"></main>
    </header>
    `;
  }

  getTabButton({ tabType, tabLabel }) {
    return `<li>
      <button id=${tabType}>${tabLabel}</button>
    </li>`;
  }
}
