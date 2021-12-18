import { COURSE, DOM } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';

class CrewManageView {
  constructor({ mainSection, inputs, frontendCrewList, backendCrewList }) {
    this.$app = mainSection;
    this.mount(inputs, frontendCrewList, backendCrewList);
  }

  mount(inputs, frontendCrewList, backendCrewList) {
    const { courseName, frontendInput, backendInput } = inputs;
    this.$app.innerHTML = this.generateTemplate(courseName);
    if (courseName === COURSE.FRONTEND) {
      this.renderFrontendCourse(frontendInput, frontendCrewList);
    }
    if (courseName === COURSE.BACKEND) {
      this.renderBackendCourse(backendInput, backendCrewList);
    }
  }

  generateTemplate(currentCourse) {
    return `
    ${this.createCrewCourseTemplate(currentCourse)}
    `;
  }

  /** 수정요망 */
  createCrewCourseTemplate(currentCourse) {
    return `
      <section id="${DOM.COURSE_SELECT_SECTION}">
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
      ${this.createRadioFormTemplate(currentCourse)}
      </div>
      </section>
      <section id="${DOM.CREW_FORM_SECTION}"></section>
      <section id="${DOM.CREW_LIST_SECTION}"></section>
      `;
  }

  createRadioFormTemplate(currentCourse) {
    const frontendRadio = ` <input id="${DOM.RADIO_FRONTEND_ID}" type="radio" name="${
      DOM.COURSE_RADIO_NAME
    }" value="frontend" ${currentCourse === COURSE.FRONTEND ? 'checked' : ''}  />
    <label for="frontend">프론트엔드</label>`;

    const backendRadio = `<input id="${DOM.RADIO_BACKEND_ID} "type="radio" name="${
      DOM.COURSE_RADIO_NAME
    }" value="backend" ${currentCourse === COURSE.BACKEND ? 'checked' : ''}/>
    <label for="backend">백엔드</label>`;
    return `${frontendRadio}${backendRadio}`;
  }

  renderFrontendCourse(inputs, crewList) {
    $(DOM.CREW_FORM_SECTION).innerHTML = `
    <h3>프론트엔드 크루 관리</h3>
    ${this.createFormTemplate(inputs, COURSE.FRONTEND)}
    `;
    $(DOM.CREW_LIST_SECTION).innerHTML = `
    <h3>프론트엔드 크루 목록</h3>
    ${this.createListTemplate(crewList)}
    `;
  }

  renderBackendCourse(inputs, crewList) {
    $(DOM.CREW_FORM_SECTION).innerHTML = `
    <h3>백엔드 크루 관리</h3>
    ${this.createFormTemplate(inputs, COURSE.BACKEND)}
    `;
    $(DOM.CREW_LIST_SECTION).innerHTML = `
    <h3>백엔드 크루 목록</h3>
    ${this.createListTemplate(crewList)}
    `;
  }

  createFormTemplate(inputs, courseName) {
    return `<form id="${DOM.CREW_INPUT_FORM_ID}">
    <label>크루 이름</label>
    <input type="text" id="${DOM.CREW_NAME_INPUT_ID}" data-course="${courseName}" value="${inputs}"/>
    <button id="${DOM.ADD_CREW_BUTTON_ID}">확인</button>
  </form>`;
  }

  createListTemplate(crewList) {
    return `<table border="1" id="${DOM.CREW_TABLE_ID}">
    <thead>
      <tr>
        <th>번호</th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>
    <tbody id="${DOM.CREW_TABLE_BODY}">
    ${this.createTableTemplate(crewList)}
    </tbody>
  </table>`;
  }

  createTableTemplate(crewList) {
    return `${crewList
      .map(
        (crew, index) =>
          `<tr>
        <td>${index}</td>
        <td>${crew.name}</td>
        <td>
          <button data-index=${index} class="${DOM.DELETE_CREW_BUTTON_CLASSNAME}">삭제</button>
        </td>
      </tr>`
      )
      .join('')}`;
  }

  renderWithNewCrewList(crewList) {
    $(DOM.CREW_TABLE_BODY).innerHTML = this.createTableTemplate(crewList);
  }

  renderWithNewInput(input) {
    $(DOM.CREW_NAME_INPUT_ID).value = input;
  }
}
export default CrewManageView;
