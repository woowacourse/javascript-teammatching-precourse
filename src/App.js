import CrewManageContainer from './components/containers/CrewManageContainer.js';
import TeamManageContainer from './components/containers/TeamManageContainer.js';
import Component from './components/core/Component.js';
import Menu from './components/Menu.js';

export default class App extends Component {
  init() {}

  template() {
    return `
      <header id="menu-container"></header>
      <main id="main-container"></main>
    `;
  }

  mounted() {
    this.mountMenuComponent();
  }

  mountMenuComponent() {
    const menuContainer = document.querySelector('#menu-container');
    new Menu(menuContainer, {
      onClickCrewTab: this.showCrewTabContainer.bind(this),
      onClickTeamTab: this.showTeamTabContainer.bind(this)
    });
  }

  showCrewTabContainer() {
    const mainContainer = document.querySelector('#main-container');
    new CrewManageContainer(mainContainer);
  }

  crewTabClickHandler() {
    this.showCrewTabContainer();
  }

  showTeamTabContainer() {
    const mainContainer = document.querySelector('#main-container');
    new TeamManageContainer(mainContainer);
  }

  teamTabClickHandler() {
    this.showTeamTabContainer();
  }
}
