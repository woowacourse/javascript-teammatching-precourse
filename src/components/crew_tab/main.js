import Component from "../../core/Component.js";
import SelectCourse from "./SelectCourse.js";
import CrewManage from "./CrewManage.js";

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
        <section id="crew-manage"></section>
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
      $state: { checkedCrewCourse, frontends, backends },
      setChangeCourse,
      getCourseName,
      getCurrentCrews,
    } = this;
    const [$selectCourse, $crewManage, $crewList] =
      document.querySelectorAll("section");

    const courseName = getCourseName(checkedCrewCourse);
    const currentCrews = getCurrentCrews(
      checkedCrewCourse,
      frontends,
      backends
    );

    new SelectCourse($selectCourse, {
      checkedCrewCourse,
      setChangeCourse: setChangeCourse.bind(this),
    });

    new CrewManage($crewManage, { courseName, currentCrews });
  }

  setChangeCourse(newCourse) {
    const payload = { checkedCrewCourse: newCourse };
    this.callAPI.setTeamMatching(payload);
    this.setState(payload);
  }

  getCourseName(course) {
    if (course === "frontend") return "프론트엔드";
    if (course === "backend") return "백엔드";
  }

  getCurrentCrews(course, frontends, backends) {
    if (course === "frontend") return frontends;
    if (course === "backend") return backends;
  }
}
