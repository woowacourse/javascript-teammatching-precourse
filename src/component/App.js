import Component from '../core/Component.js';
import Header from './Header.js';
import TabCrewManage from './TabCrewManage.js';
import TabTeamManage from './TabTeamManage.js';
import { ID } from '../constant/selector.js';

export default class App extends Component {
  mount() {
    this.header = new Header(this.$element.querySelector(`#${ID.HEADER}`));
    this.tabCrewManage = new TabCrewManage(
      this.$element.querySelector(`#${ID.CREW_TAB_CONTAINER}`)
    );
    this.tabTeamManage = new TabTeamManage(
      this.$element.querySelector(`#${ID.TEAM_TAB_CONTAINER}`)
    );
  }

  template() {
    return `
      <header id="${ID.HEADER}"></header>
      <main>
        <div id="${ID.CREW_TAB_CONTAINER}"></div>
        <div id="${ID.TEAM_TAB_CONTAINER}"></div>
      </main>
    `;
  }
}
