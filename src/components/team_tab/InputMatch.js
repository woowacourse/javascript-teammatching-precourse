import Component from "../../core/Component.js";

export default class InputMatch extends Component {
  setup() {
    console.log("InputMatch", this);
  }

  template() {
    return `
        <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
        <div>
        <div>
            <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
            <form>
            <label>1팀당 인원 수</label>
            <input type="number" id="team-member-count-input"/>
            <button id="match-team-button">팀 매칭</button>
            </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
            <li>준</li>
            <li>포코</li>
        </ul>
        </div>
    `;
  }

  mounted() {
    this.addEvent("submit", this.$target, (e) => this.onSubmitHandler(e));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const numbers = document.querySelector("#team-member-count-input").value;
    console.log(numbers);
    if (numbers === "") {
      window.alert(`인원 수를 입력해주세요.`);
      return;
    }
  }
}
