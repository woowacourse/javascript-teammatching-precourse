import { TAP_BUTTON_ID } from '../constants.js';

export default class TapView {
  constructor() {
    this.app = document.getElementById('app');
  }

  render() {
    this.template();
  }

  template() {
    this.app.innerHTML = `
    <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id=${TAP_BUTTON_ID.crew}>크루 관리</button>
        </li>
        <li>
          <button id=${TAP_BUTTON_ID.team}>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
    `;
  }
}
