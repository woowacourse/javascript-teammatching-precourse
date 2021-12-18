import Component from "../../core/Component.js";

import { isValidCrewName } from "../../utils/validation.js";

export default class CrewManage extends Component {
  setup() {
    console.log("CrewManage", this);
  }

  template() {
    const { courseName } = this.$props;

    return `
        <h3>${courseName} 크루 관리</h3>
        <form>
            <label>크루 이름</label>
            <input type="text" id="crew-name-input"/>
            <button id="add-crew-buttton">확인</button>
        </form>
    `;
  }

  mounted() {
    this.addEvent("submit", this.$target, (e) => this.onSubmitHandler(e));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { currentCrews } = this.$props;
    const crewName = e.target[0].value.trim();

    if (isValidCrewName(crewName, currentCrews)) {
      console.log("correct");
    }
  }
}
