import { DOM, TAB } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';
import CrewManageView from './CrewManageView.js';
import TeamMatchingView from './TeamMatchingView.js';

class View {
  constructor() {
    this.$app = $(DOM.APP_ID);
    this.mount();
  }

  mount() {
    this.$app.innerHTML = this.generateTemplate();
  }

  generateTemplate() {
    return ` <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul id="${DOM.TAB_LIST_ID}"><li><button id="${DOM.CREW_TAB_ID}">${TAB.CREW}</button></li>
        <li><button id="${DOM.TEAM_TAB_ID}">${TAB.TEAM}</button></li>
      </ul>
    </nav>
  </header>
  <main id="${DOM.MAIN_SECTION}"></main>`;
  }

  renderCrewManageMenu({ inputs, frontendCrewList, backendCrewList }) {
    this.mainSection = new CrewManageView({
      mainSection: $(DOM.MAIN_SECTION),
      inputs: inputs,
      frontendCrewList: frontendCrewList,
      backendCrewList: backendCrewList,
    });
  }

  renderTeamMatchingMenu() {
    this.mainSection = new TeamMatchingView({ mainSection: $(DOM.MAIN_SECTION) });
  }
}
export default View;
