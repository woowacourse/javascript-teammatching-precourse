import Component from '../../core/Component.js';
import crew from '../../store/Crew.js';
import EVENT from '../../constant/event.js';
import { COURSE } from '../../constant/data.js';
import { ID } from '../../constant/selector.js';

export default class SelectionCourse extends Component {
  init() {
    crew.add(this);
  }

  template() {
    const { selectedCourse } = crew.getValue();

    return `
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="${ID.COURSE_FRONT}" ${selectedCourse === COURSE.FRONTEND ? 'checked' : ''}/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="${ID.COURSE_BACK}" ${selectedCourse === COURSE.BACKEND ? 'checked' : ''}/>
        <label for="backend">백엔드</label>
      </div>
    `;
  }

  setEvent() {
    this.addEvent(EVENT.CLICK, 'input[name="course"]', (event) => {
      crew.selectCourse(event.target.value);
    });
  }
}
