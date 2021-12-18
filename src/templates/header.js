import { NAVIGATION } from "../constants/selector.js";

function navigation() {
  return `
    <nav>
    <ul>
      <li>
        <button id=${NAVIGATION.ID.CREW_TAB}>크루 관리</button>
      </li>
      <li>
        <button id=${NAVIGATION.ID.TEAM_TAB}>팀 매칭 관리</button>
      </li>
    </ul>
  </nav>
    `;
}

export default function header() {
  return `
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    ${navigation()}
  </header>
  `;
}
