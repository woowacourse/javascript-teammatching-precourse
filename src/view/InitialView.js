import { handleClickCrewTab, handleClickTeamTab } from "../controller/InitialViewHandler.js";

export default class InitialView {
  constructor(container) {
    this.container = container;
  }

  render() {
    this.container.innerHTML = this.template();
    this.bindClickEvent();
    this.contentContainer = document.createElement("main");
    this.container.append(this.contentContainer);
  }

  template() {
    return `
    <header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>
        <ul>
          <li>
            <button id="crew-tab">크루 관리</button>
          </li>
          <li>
            <button id="team-tab">팀 매칭 관리</button>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }

  bindClickEvent() {
    document
      .getElementById("crew-tab")
      .addEventListener("click", () => handleClickCrewTab(this.contentContainer));
    document.getElementById("team-tab").addEventListener("click", handleClickTeamTab);
  }
}
