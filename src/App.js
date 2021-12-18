import Component from './core/Component.js';
import { $, $$, visibleElement } from './utils/element-tools.js';

export default class App extends Component {
  htmlTemplate() {
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
      <div class="component hide" data-component="crew-tab"></div>
      <div class="component hide" data-component="team-tab"></div>
    </header>
    `;
  }

  mounted() {}

  bindEvents() {
    this.addEvent('click', 'nav button[id]', this.handleMenuClick);
  }

  handleMenuClick(event) {
    visibleElement($$('div.component'), false);

    const $targetComponent = $(`[data-component="${event.target.id}"]`);
    $targetComponent.classList.remove('hide');
  }
}
