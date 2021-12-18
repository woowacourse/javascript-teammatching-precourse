import Component from '../../core/Component.js';
import { EVENT_TYPE, COURSE } from '../../utils/constants.js';

export default class CourseSection extends Component {
  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.CLICK, ({ target }) =>
      this.onClickRadio(target)
    );
  }

  onClickRadio(target) {
    if (target.type !== 'radio') return;
    this.props.onChangeCourse(COURSE[target.value]);
  }

  render() {
    this.$container.innerHTML = `
     <h3>크루를 관리할 코스를 선택해주세요</h3>
     <div>
       <input type="radio" id="frontend-course" name="course" value="frontend" />
       <label for="frontend">프론트엔드</label>
       <input type="radio" id="backend-course" name="course" value="backend" />
       <label for="backend">백엔드</label>
     </div>
    `;
  }
}
