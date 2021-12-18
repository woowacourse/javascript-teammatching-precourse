/* eslint-disable max-lines-per-function */
import { ELEMENT_SELECTOR } from '../constants/index.js';

export const headerTemplate = () => {
  return `
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav id="${ELEMENT_SELECTOR.IDS.TAB_MENU}">
      <ul>
        <li>
          <button type="button"
            id="${ELEMENT_SELECTOR.IDS.CREW_MANAGE.MENU}"
            data-tab-pane-id="${ELEMENT_SELECTOR.IDS.CREW_MANAGE.PANE}">
            크루 관리
          </button>
        </li>
        <li>
          <button type="button"
            id="${ELEMENT_SELECTOR.IDS.TEAM_MATCHING.MENU}"
            data-tab-pane-id="${ELEMENT_SELECTOR.IDS.TEAM_MATCHING.PANE}">
            팀 매칭 관리
          </button>
        </li>
      </ul>
    </nav>
  </header>
  `;
};
