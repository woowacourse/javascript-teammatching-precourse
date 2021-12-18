import { CREW_COURSE, CUSTOM_EVENT_NAME, EVENT_LISTENER_TYPE, SELECTOR, STYLE_DISPLAY } from '../constants.js';
import { on, qs, qsAll } from '../utils/index.js';
import View from './View.js';

export default class CrewManagementView extends View {
  constructor(element = qs(`#${SELECTOR.CREW_MANAGEMENT_VIEW}`)) {
    super(element);
    this.template = new Template();

    this.selectedCourse = '';
    this.initializeElements(this.selectedCourse, []);
  }

  initializeElements(course) {
    this.element.innerHTML = this.template.getInitialElements(
      this.selectedCourse, course,
    );
  }

  show(data) {
    this.initializeElements(data);

    this.frontendCourse = qs(`#${SELECTOR.FRONTEND_COURSE}`);
    this.backendCourse = qs(`#${SELECTOR.BACKEND_COURSE}`);
    this.frontendSectionView = qs(`#${SELECTOR.FRONTEND_SECTION_VIEW}`);
    this.backendSectionView = qs(`#${SELECTOR.BACKEND_SECTION_VIEW}`);
    this.crewNameInput = qs(`#${SELECTOR.CREW_NAME_INPUT}`);
    this.addCrewButton = qs(`#${SELECTOR.ADD_CREW_BUTTTON}`);

    this.bindEvents(data);
    super.show();
  }

  bindEvents(data) {
    on(this.frontendCourse, EVENT_LISTENER_TYPE.CLICK, () => {
      this.selectedCourse = CREW_COURSE.FRONTEND;
      this.show(data);
      this.handleAddCrewButton()
      this.handleDeleteCrewButton();
    });
    on(this.backendCourse, EVENT_LISTENER_TYPE.CLICK, () => {
      this.selectedCourse = CREW_COURSE.BACKEND;
      this.show(data);
      this.handleAddCrewButton();
      this.handleDeleteCrewButton();
    });
  }
  
  handleAddCrewButton() {
    on(this.addCrewButton, EVENT_LISTENER_TYPE.CLICK, (event) => {
      event.preventDefault();
      const request = {
        selectedCourse: this.selectedCourse,
        name: this.crewNameInput.value
      }
      this.emit(CUSTOM_EVENT_NAME.ADD_CREW, { request });
    })
  }

  handleDeleteCrewButton() {
    const buttons = qsAll(`.${SELECTOR.DELETE_CREW_BUTTTON}`);
    const names = qsAll(`.delete_name`);

    buttons.forEach((button, index) => {
      on(button, EVENT_LISTENER_TYPE.CLICK, () => {
        this.handleDelete(names[index].innerText, this.selectedCourse);
      })
    })
  }

  handleDelete(value, course) {
    if (confirm('삭제하시겠습니까?')) {
      const request = { value, course };
      this.emit(CUSTOM_EVENT_NAME.DELETE_CREW, { request });
    }
    return;    
  }
}

class Template {
  getInitialElements(course, crewList) {
    return `<section>
      <h3>크루를 관리할 코스를 선택해주세요.</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="${
          SELECTOR.FRONTEND_COURSE
        }" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="${
          SELECTOR.BACKEND_COURSE
        }" />
        <label for="backend">백엔드</label>
      </div>
    </section>
    ${course ? this.getCourseTable(course, crewList) : ''}
    `;
  }

  getCourseTable(course, crewList) {
    return `<section>
      <h3>${
        course === CREW_COURSE.FRONTEND ? '프론트엔드' : '백엔드'
      } 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="${SELECTOR.CREW_NAME_INPUT}" type="text" />
        <button id="${SELECTOR.ADD_CREW_BUTTTON}">확인</button>
      </form>
    </section>
    <section>
      <h3>${
        course === CREW_COURSE.FRONTEND ? '프론트엔드' : '백엔드'
      } 크루 목록</h3>
      <table border="1">
        <thead>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </thead>
        <tbody>
          ${
            course === CREW_COURSE.FRONTEND
              ? crewList.frontend
                  ?.map((crew, index) => this.getCrews(crew, index + 1))
                  .join('')
              : crewList.backend
                  ?.map((crew, index) => this.getCrews(crew, index + 1))
                  .join('')
          }
        </tbody>
      </table>
    </section>
    
    `;
  }

  getCrews(crew, index) {
    return `<tr>
        <td class="delete_name">${index}</td>
        <td>${crew}</td>
        <td>
          <button class="${SELECTOR.DELETE_CREW_BUTTTON}">삭제</button>
        </td>
      </tr>
    `;
  }
}
