import Component from '../core/Component.js';
import navigator from '../store/Navigator.js';
import { ID, CLASS } from '../constant/selector.js';
import { TAB } from '../constant/data.js';
import EVENT from '../constant/event.js';

export default class Header extends Component {
  template() {
    return `
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button class="${CLASS.TAB_BUTTON}" id="${ID.CREW_TAB_BUTTON}" data-tab="${TAB.CREW}">크루 관리</button>
        </li>
        <li>
          <button class="${CLASS.TAB_BUTTON}" id="${ID.TEAM_TAB_BUTTON}" data-tab="${TAB.TEAM}">팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
    `;
  }

  setEvent() {
    this.addEvent(EVENT.CLICK, `.${CLASS.TAB_BUTTON}`, (event) => {
      navigator.navigateTo(event.target.dataset.tab);
    });
  }
}
