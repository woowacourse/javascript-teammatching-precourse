import { DOM } from '../../lib/constants.js';

class CrewManageView {
  constructor({ mainSection, inputs }) {
    this.$app = mainSection;
    this.mount(inputs);
  }

  mount(inputs) {
    this.$app.innerHTML = this.generateTemplate(inputs);
  }

  generateTemplate(inputs) {
    return `
    ${this.createCrewCourseTemplate(inputs)}
    `;
  }

  createCrewCourseTemplate(inputs) {
    return `
      <section id="${DOM.COURSE_SELECT_SECTION}">
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input id="${DOM.RADIO_FRONTEND_ID}" type="radio" name="${DOM.COURSE_RADIO_NAME}" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input id="${DOM.RADIO_BACKEND_ID} "type="radio" name="${DOM.COURSE_RADIO_NAME}" value="backend" />
        <label for="backend">백엔드</label>
      </div>
      </section>
      `;
  }
}
export default CrewManageView;
