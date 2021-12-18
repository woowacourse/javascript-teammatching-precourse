import Component from "../../core/Component.js";

import { isValidCrewName } from "../../utils/validation.js";

export default class CrewManage extends Component {
  setup() {
    console.log("CrewManage", this);
  }

  template() {
    const { courseName } = this.$props;

    if (!courseName) return ``;

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
    const { currentCrews, addCrew, checkedCrewCourse } = this.$props;
    const crewName = e.target[0].value.trim();

    if (isValidCrewName(crewName, currentCrews)) {
      this.setAddCrew({
        crews: [...currentCrews, crewName],
        checkedCrewCourse,
        addCrew,
      });
    }
  }

  setAddCrew({ crews, checkedCrewCourse, addCrew }) {
    if (checkedCrewCourse === "frontend") return addCrew({ frontends: crews });
    if (checkedCrewCourse === "backend") return addCrew({ backends: crews });
  }
}
