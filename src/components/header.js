import CrewManager from './crewManager.js';
import TeamMatchingManager from './teamMatchingManager.js';

export default function Header() {
  this.headerContainer = document.querySelector('#app');

  this.template = () => {
    return `
      <header>
        <h1>우테코 크루와 팀 매칭 관리 보드</h1>
        <nav>
          <ul>
            <li>
              <button id='crew-tab'>크루 관리</button>
            </li>
            <li>
              <button id='team-tab'>팀 매칭 관리</button>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main-container"></main>
    `;
  };

  this.onClickCrewTabButton = () => {
    const crewManager = new CrewManager();
    crewManager.render();
  };

  this.onClickTeamTabButton = () => {
    const teamMatchingManager = new TeamMatchingManager();
    teamMatchingManager.render();
  };

  this.addEvent = () => {
    const crewTab = document.querySelector('#crew-tab');
    const teamTab = document.querySelector('#team-tab');

    crewTab.addEventListener('click', this.onClickCrewTabButton.bind(this));
    teamTab.addEventListener('click', this.onClickTeamTabButton.bind(this));
  };

  this.render = () => {
    this.headerContainer.innerHTML = this.template();
    this.addEvent();
  };
}
