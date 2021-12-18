import CrewManager from './crewManager.js';

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
    `;
  };

  this.onClickCrewTabButton = () => {
    const crewManager = new CrewManager();
    crewManager.render();
  };

  this.addEvent = () => {
    const crewTab = document.querySelector('#crew-tab');
    crewTab.addEventListener('click', this.onClickCrewTabButton.bind(this));
  };

  this.render = () => {
    this.headerContainer.innerHTML = this.template();
    this.addEvent();
  };
}
