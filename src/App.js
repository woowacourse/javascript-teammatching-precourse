import Component from "./core/Component.js";
import Nav from "./components/Nav.js";
import CrewTab from "./components/crew_tab/main.js";
import TeamTab from "./components/team_tab/main.js";

import Api from "./libs/api.js";

export default class App extends Component {
  setup() {
    console.log("app", this);
    this.callAPI = new Api();
    this.initCallAPI();
  }

  initCallAPI() {
    this.callAPI.setup();
    this.$state = this.callAPI.getTeamMatching();
  }

  template() {
    return `
        <header>
            <h1>우테코 크루와 팀 매칭 관리 보드</h1>
            <nav>
            </nav>
        </header>
        <main></main>
    `;
  }

  mounted() {
    const {
      $state: { currentTabId },
      changeTab,
    } = this;
    const $nav = document.querySelector("nav");
    const $main = document.querySelector("main");

    new Nav($nav, { changeTab: changeTab.bind(this) });

    if (currentTabId === "crew-tab") return new CrewTab($main);
    if (currentTabId === "team-tab") return new TeamTab($main);
  }

  changeTab(newTabId) {
    const payload = { currentTabId: newTabId };
    this.callAPI.setTeamMatching(payload);
    this.setState(payload);
  }
}
