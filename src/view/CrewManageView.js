import { handleSelectCourse } from "../controller/CrewManageViewHandler.js";

export default class CrewManageView {
  constructor(container) {
    this.container = container;
  }

  render() {
    this.container.innerHTML = this.selectCourseTemplate();
    this.bindSelectCourseEvent();
  }

  selectCourseTemplate() {
    return `
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course" />
        <label for="backend">백엔드</label>
      </div>
    </section>
    `;
  }

  bindSelectCourseEvent() {
    document
      .getElementsByName("course")
      .forEach(radioInput => radioInput.addEventListener("click", e => handleSelectCourse(e)));
  }
}
