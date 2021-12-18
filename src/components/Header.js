import Component from '../core/Component.js';
import { EVENT_TYPE, MENU, MENU_ID } from '../utils/constants.js';

export default class Header extends Component {
  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.CLICK, event => this.onClick(event));
  }

  onClick({ target }) {
    const menuId = MENU_ID[target.id];
    if (!menuId) return;
    this.props.onChangeMenu(MENU[menuId]);
  }

  render() {
    this.$container.innerHTML = `
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
      `;
  }
}
