import Component from "../../core/Component.js";
import SelectCourse from "./SelectCourse.js";

import Api from "../../libs/api.js";

export default class CrewTab extends Component {
  setup() {
    this.callAPI = new Api();
    this.initCallAPI();
    console.log("CrewTab", this);
  }

  initCallAPI() {
    this.callAPI.setup();
    this.$state = this.callAPI.getTeamMatching();
  }

  template() {
    return `
        <section id="select-course"></section>

        <section id="crew-manage">
        <h3>프론트엔드 크루 관리</h3>
        <form>
            <label>크루 이름</label>
            <input type="text" id="crew-name-input"/>
            <button id="add-crew-buttton">확인</button>
        </form>
        </section>
        <section id="crew-list">
        <h3>프론트엔드 크루 목록</h3>
        <table border="1" id="crew-table">
            <thead>
            <tr>
                <th></th>
                <th>크루</th>
                <th>관리</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>준</td>
                <td>
                <button id="delete-crew-buttton">삭제</button>
                </td>
            </tr>
            </tbody>
        </table>
        </section>
    `;
  }

  mounted() {
    const {
      $state: { checkedCrewCourse },
      setChangeCourse,
    } = this;
    const [$selectCourse, $crewManage, $crewList] =
      document.querySelectorAll("section");

    new SelectCourse($selectCourse, {
      checkedCrewCourse,
      setChangeCourse: setChangeCourse.bind(this),
    });
  }

  setChangeCourse(newCourse) {
    const payload = { checkedCrewCourse: newCourse };
    this.callAPI.setTeamMatching(payload);
    this.setState(payload);
  }
}
