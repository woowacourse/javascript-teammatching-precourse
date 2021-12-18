import Component from "../../core/Component.js";
import SelectOption from "./SelectOption.js";
import InputMatch from "./InputMatch.js";

import Api from "../../libs/api.js";

export default class TeamTab extends Component {
  setup() {
    this.callAPI = new Api();
    this.initCallAPI();
    console.log("TeamTab", this);
  }

  initCallAPI() {
    this.callAPI.setup();
    this.$state = this.callAPI.getTeamMatching();
  }

  template() {
    return `
      <section id="select-option"></section>
      <section id="input-match">
        
      </section>

      <!-- 팀 매칭이 된 경우 -->
      <section id="matched-team">
        <h3>프론트엔드 숫자야구게임 조회</h3>
        <p>팀이 매칭되었습니다.</p>
        <ul id="team-match-result">
          <li>준,포코</li>
        </ul>
        <p>
          팀을 재매칭 하시겠습니까?
          <button id="rematch-team-button">재매칭</button>
        </p>
      </section>
    `;
  }

  mounted() {
    const { setSelectedOption } = this;
    const $selectOption = document.querySelector("#select-option");
    const $inputMatch = document.querySelector("#input-match");

    new SelectOption($selectOption, {
      setSelectedOption: setSelectedOption.bind(this),
    });

    new InputMatch($inputMatch);
  }

  setSelectedOption(props) {
    const payload = { ...props };
    this.callAPI.setTeamMatching(payload);
    this.setState(payload);
  }
}
