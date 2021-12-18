import Component from '../../core/Component.js';
import { visibleElement, $$ } from '../../utils/element-tools.js';

export default class CourseSelect extends Component {
  htmlTemplate() {
    return `
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" id="frontend-course" name="course" value="frontend" />
      <label for="frontend">프론트엔드</label>
      <input type="radio" id="backend-course" name="course" value="backend" />
      <label for="backend">백엔드</label>
    </div>
    `;
  }

  bindEvents() {
    this.addEvent(
      'click',
      '#frontend-course, #backend-course',
      this.handelCourseSeleect.bind(this)
    );
  }

  handelCourseSeleect(event) {
    visibleElement($$('[data-component="crew-tab"] > section.component'), true);

    const { crewManager, state } = this._props;
    const crewList = [...crewManager.setCourse(event.target.value).filterList];

    state.value = crewList;
  }
}
