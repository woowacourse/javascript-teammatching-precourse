import Component from "../../core/Component.js";

export default class SelectCourse extends Component {
  setup() {
    console.log("selectCourse", this);
  }

  template() {
    return `
        <h3>크루를 관리할 코스를 선택해주세요</h3>
        <div>
            <input type="radio" name="course" value="frontend" id="frontend-course"/>
            <label for="frontend">프론트엔드</label>
            <input type="radio" name="course" value="backend" id="backend-course"/>
            <label for="backend">백엔드</label>
        </div>
    `;
  }

  mounted() {
    const { checkedCrewCourse } = this.$props;

    const $frontendCourseRadio = document.querySelector("#frontend-course");
    const $backendCourseRadio = document.querySelector("#backend-course");

    this.setChecked(
      checkedCrewCourse,
      $frontendCourseRadio,
      $backendCourseRadio
    );

    this.addEvent("change", $frontendCourseRadio, (e) => this.onChecked(e));
    this.addEvent("change", $backendCourseRadio, (e) => this.onChecked(e));
  }

  onChecked(e) {
    const { setChangeCourse } = this.$props;
    const { value } = e.target;

    setChangeCourse(value);
  }

  setChecked(course, $frontendCourseRadio, $backendCourseRadio) {
    if (course === "frontend") return ($frontendCourseRadio.checked = true);
    if (course === "backend") return ($backendCourseRadio = true);
  }
}
