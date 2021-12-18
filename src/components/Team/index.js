import Component from "../../core/Component.js";
import store, { setState } from "../../storage/Store.js";
import Matching from "./Matching.js";
import { $ } from "../../common/dom.js";

export default class Team extends Component {
  setup() {
    this.currentCourse = "frontend";
    this.currentPlayGame = "baseball";
  }

  mount() {
    this.setEvent();
  }

  setEvent() {
    $("#course-select").addEventListener("change", this.onChange.bind(this));
    $("#mission-select").addEventListener("change", this.onChange.bind(this));
    $("#show-team-matcher-button").addEventListener(
      "click",
      this.onClick.bind(this)
    );
  }

  onChange({ target }) {
    this.currentCourse = target.value;
    console.log(this.currentCourse);
  }

  onClick(e) {
    e.preventDefault();
    console.log(this.currentCourse, this.currentPlayGame);
    setState("currentTeam", this.currentCourse);
    setState("currentGame", this.currentPlayGame);
    new Matching($("#team-div"));
  }

  template() {
    return `  
      <section id="team-section">
        <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
        <form>
          <select id="course-select">
            <option value = "frontend">프론트엔드</option>
            <option value = "backend" >백엔드</option>
          </select>
          <select id="mission-select">
            <option value="baseball">숫자야구게임</option>
          </select>
          <button id="show-team-matcher-button">확인</button>
        </form>
        <div id="team-div">
        </div>
      </section>
    `;
  }
}
