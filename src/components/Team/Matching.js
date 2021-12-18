import Component from "../../core/Component.js";
import { COURSE } from "../../constants/const.js";
import store, { setState } from "../../storage/Store.js";

export default class Macthing extends Component {
  setup() {
    const state = store.getState();
    this.currentTeam = state.currentTeam;

    if (this.currentTeam === "frontend") {
      this.crewList = state.frontend;
    } else {
      this.crewList = state.backend;
    }
  }

  mount() {
    this.setEvent();
  }

  template() {
    return `  
      <section>
        <h3>${COURSE[this.currentTeam]} 숫자야구게임 미션의 팀 매칭</h3>
        <div>
          <div>
            <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
            <form>
              <label>1팀당 인원 수</label>
              <input id="team-member-count-input" type="number" />
              <button id="match-team-button">팀 매칭</button>
            </form>
          </div>
          <h4>크루 목록</h4>
          <ul>
            ${this.crewList
              .map(({ name, index }) => `<li>${name}</li>`)
              .join("")}
          </ul>
        </div>
      </section>
    `;
  }
}
