import { clearTextContent } from "../controller/utils.js";
import { COURSE } from "../constant/teammatching.js";

export default class CrewManageView {
  constructor(container) {
    this.container = container;
  }

  render() {
    this.container.innerHTML = this.selectCourseTemplate();
    this.bindSelectCourseEvent();
    this.subContainer = document.createElement("section");
    this.subContainer.id = "crew-manage-sub-container";
    this.container.appendChild(this.subContainer);
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
      .forEach(radioInput => radioInput.addEventListener("click", e => this.handleSelectCourse(e)));
  }

  handleSelectCourse(e) {
    const courseToSelect = e.target.value;
    // local 해당 키로, 크루 가져오기
    this.renderCrewAddFormCrewList(courseToSelect);
  }

  renderCrewAddFormCrewList(course) {
    clearTextContent(this.subContainer);
    this.subContainer.innerHTML = this.crewAddFormTemplate(course) + this.crewListTemplate(course);
  }

  crewAddFormTemplate(course) {
    const courseName = course === "frontend" ? COURSE.FRONTEND.KOREAN : COURSE.BACKEND.KOREAN;
    return `
      <h3>${courseName} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input "/>
        <button id="add-crew-button">확인</button>
      </form>
    `;
  }

  crewListTemplate(course) {
    return `
    <section>
      <h3>프론트엔드 크루 목록</h3>
      <table border="1" class="crew-table">
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
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    `;
  }
}
