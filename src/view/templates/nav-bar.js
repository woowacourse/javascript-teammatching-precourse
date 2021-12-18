import { ID } from '../../utils/constants.js';

export const template = `
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav id=${ID.NAV}>
      <ul>
        <li>
          <button id=${ID.CREW_TAB}>크루 관리</button>
        </li>
        <li>
          <button id=${ID.TEAM_TAB}>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main id=${ID.MAIN}></main>
`;
