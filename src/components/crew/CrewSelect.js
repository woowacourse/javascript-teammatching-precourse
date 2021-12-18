import { ID } from '../../constants/index.js';
import { $ } from '../../utils/selector.js';
import CrewInput from './CrewInput.js';

class CrewSelect {
  constructor($selectSection, $manageSection) {
    this.$selectSection = $selectSection;
    this.$manageSection = $manageSection;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$selectSection.innerHTML = `
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div id=${ID.COURSE_SELECT_CONTAINER}>
        <input id=${ID.FRONTEND_COURSE} type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input id=${ID.BACKEND_COURSE} type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
    `;
  }

  selectDom() {
    this.$courseContainer = $(`#${ID.COURSE_SELECT_CONTAINER}`);
    // this.$label = this.$courseContainer.querySelector('label');
    // this.$frontInput = $(`#${ID.FRONTEND_COURSE}`);
    // this.$backInput = $(`#${ID.BACKEND_COURSE}`);
  }

  addEvent() {
    this.$courseContainer.addEventListener(
      'click',
      this.clickOption.bind(this)
    );
  }

  clickOption(e) {
    const { textContent } = e.target.nextElementSibling;
    const { id } = e.target;

    if (id === ID.FRONTEND_COURSE || id === ID.BACKEND_COURSE) {
      new CrewInput(this.$manageSection, textContent);
    }
  }
}

export default CrewSelect;
