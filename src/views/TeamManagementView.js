import { EVENT_LISTENER_TYPE, SELECTOR } from '../constants.js';
import { on, qs } from '../utils/index.js';
import View from './View.js';

export default class TeamManagementView extends View {
  constructor(element = qs(`#${SELECTOR.TEAM_MANAGEMENT_VIEW}`)) {
    super(element);

    this.clickshowTeamMatcherButton = false;

    this.initializeElements();
  }

  initializeElements() {
    this.element.innerHTML = this.template();
  }

  show() {
    this.initializeElements();

    this.showTeamMatcherButton = qs(`#${SELECTOR.SHOW_TEAM_MATCHER_BUTTON}`);

    this.bindEvents();
    super.show();
  }

  bindEvents() {
    on(this.showTeamMatcherButton, EVENT_LISTENER_TYPE.CLICK, (event) => {
      event.preventDefault();
      this.clickshowTeamMatcherButton = true;
    })
  }

  template() {
    return `<section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select>
          <option>프론트엔드</option>
          <option>백엔드</option>
        </select>
        <select>
          <option>숫자야구게임</option>
        </select>
        <button id="${SELECTOR.SHOW_TEAM_MATCHER_BUTTON}">확인</button>
      </form>
    </section>
    ${
      this.clickshowTeamMatcherButton
        ? `<section>
      <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input type="number" />
            <button>팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
          <li>준</li>
          <li>포코</li>
        </ul>
      </div>
    </section>`
        : ''
    }
  `;
  }
}
