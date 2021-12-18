import Component from '../../core/Component.js';
import crew from '../../store/Crew.js';
import { ID } from '../../constant/selector.js';
import EVENT from '../../constant/event.js';
import { isValidLength } from '../../utils/validation.js';
import { COURSE, FRONTEND, BACKEND } from '../../constant/data.js';

export default class NameForm extends Component {
  init() {
    crew.add(this);
  }

  template() {
    const { selectedCourse } = crew.getValue();

    return `
    <div ${selectedCourse === null ? 'hidden' : ''}>
      <h3>${selectedCourse === COURSE.FRONTEND ? FRONTEND : BACKEND} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="${ID.NAME_INPUT}"/>
        <button id="${ID.NAME_SUBMIT}">확인</button>
      </form>
    </div>
    `;
  }

  setEvent() {
    this.addEvent(EVENT.CLICK, `#${ID.NAME_SUBMIT}`, (event) => {
      event.preventDefault();
      const nameValue = this.$element.querySelector(`#${ID.NAME_INPUT}`).value.trim();

      if (isValidLength(nameValue)) {
        crew.addCrew(nameValue);
      }
    });
  }
}
