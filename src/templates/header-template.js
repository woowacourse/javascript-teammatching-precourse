import { SELECTOR } from '../constant/constant.js';

export const headerTemplate = () => {
  return `
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id="${SELECTOR.ID.CREW_TAB}">크루 관리</button>
        </li>
        <li>
          <button id="${SELECTOR.ID.TEAM_TAB}">팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  `;
};
