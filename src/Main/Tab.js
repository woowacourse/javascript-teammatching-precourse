import Crew from "../Crew/View.js";
import Team from "../TeamMacth/View.js";
export default class Tab {
  constructor() {
    this.app = document.querySelector("#app");
    this.button = `<header>
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
    <main></main>
  </header>`;
    this.app.insertAdjacentHTML("beforebegin", this.button);
    const crewTab = document.querySelector("#crew-tab");
    const teamTab = document.querySelector("#team-tab");
    crewTab.addEventListener("click", () => {
      document.querySelector("main").remove();
      new Crew();
    });
    teamTab.addEventListener("click", () => {
      document.querySelector("main").remove();
      new Team();
    });
  }
}
