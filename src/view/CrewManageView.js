import { clearTextContent } from "../controller/utils.js";
import { COURSE } from "../constant/teammatching.js";
import Crew from "../model/Crew.js";
import { checkValidCrewName } from "../controller/checkCrewName.js";

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

  bindInsertCrewClickEvent() {
    document
      .getElementById("crew-name-form")
      .addEventListener("submit", e => this.handleInsertCrew(e));
  }

  handleSelectCourse(e) {
    this.courseToSelect = e.target.value;
    this.renderCrewAddFormCrewList(this.courseToSelect);
    this.bindInsertCrewClickEvent();
  }

  handleInsertCrew(e) {
    e.preventDefault();
    const crewNameToInput = document.getElementById("crew-name-input").value;
    if (!checkValidCrewName(crewNameToInput, this.courseToSelect)) {
      return false;
    }
    Crew.insertCrew(this.courseToSelect, crewNameToInput);
    this.renderCrewAddFormCrewList();
    this.bindInsertCrewClickEvent();
  }

  renderCrewAddFormCrewList(course) {
    clearTextContent(this.subContainer);
    const courseName = course === "frontend" ? COURSE.FRONTEND.KOREAN : COURSE.BACKEND.KOREAN;
    this.subContainer.innerHTML =
      this.crewAddFormTemplate(courseName) + this.crewListTemplate(courseName);
  }

  crewAddFormTemplate(course) {
    return `
      <h3>${course} 크루 관리</h3>
      <form id="crew-name-form">
        <label>크루 이름</label>
        <input type="text" id="crew-name-input"/>
        <button id="add-crew-button">확인</button>
      </form>
    `;
  }

  crewListTemplate(course) {
    const currentCrewList = Crew.getCurrentCrewList(this.courseToSelect);
    return `
    <section>
      <h3>${course} 크루 목록</h3>
      <table border="1" class="crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
        ${currentCrewList.map(
          (crew, index) => `
          <tr>
            <td>${index}</td>
            <td>${crew.name}</td>
            <td>
              <button class="delete-crew-button">삭제</button>
            </td>
          </tr>
        `
        )}
        </tbody>
      </table>
    </section>
    `;
  }
}
