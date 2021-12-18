export default class TabPresent {
  constructor() {
    this.$body = document.querySelector('body');
    this.showTab();
    this.crewBtn = document.querySelector('#crew-tab');
    this.teamBtn = document.querySelector('#team-tab');
  }

  showTab() {
    const tabHtml = `<header>
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
    </header>`;

    this.$body.insertAdjacentHTML('afterbegin', tabHtml);
  }
}
