import { SELECTOR } from "../data/selector.js";

export default class TabMenu {
  constructor() {
    this.template = this.tabTemplate();
  }

  tabTemplate() {
    return `<header>
  <h1>우테코 크루와 팀 매칭 관리 보드</h1>
  <nav>
    <ul>
      <li>
        <button id="${SELECTOR.CREW_TAB}">크루 관리</button>
      </li>
      <li>
        <button id="${SELECTOR.TEAM_TAB}">팀 매칭 관리</button>
      </li>
    </ul>
  </nav>
</header>`;
  }
}
