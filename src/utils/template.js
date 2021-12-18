import { ID } from '../constants/selector.js';

export function navBar() {
  return `<nav>
    <ul>
      <li>
        <button id = ${ID.TAB_CREW}>크루 관리</button>
      </li>
      <li>
        <button id = ${ID.TAB_TEAM}>팀 매칭 관리</button>
      </li>
    </ul>
  </nav>`;
}
