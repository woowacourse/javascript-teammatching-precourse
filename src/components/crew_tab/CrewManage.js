import Component from "../../core/Component.js";

export default class CrewManage extends Component {
  setup() {
    console.log("CrewManage", this);
  }

  template() {
    const { courseName } = this.$props;
    console.log("courseName", courseName);
    return `
        <h3>${courseName} 크루 관리</h3>
        <form>
            <label>크루 이름</label>
            <input type="text" id="crew-name-input"/>
            <button id="add-crew-buttton">확인</button>
        </form>
    `;
  }
}
