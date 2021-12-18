import Component from '../../core/Component.js';
import CrewStore from '../../stores/CrewStore.js';
import { addCrewAction } from '../../actions/crew.js';
import { $, resetForm } from '../../utils/dom.js';
import { parseName } from '../../utils/input.js';
import { isValidCrewName } from '../../utils/validation.js';
import {
  EVENT_TYPE,
  COURSE_NAME,
  ERROR_MESSAGES,
} from '../../utils/constants.js';

export default class CrewAddForm extends Component {
  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.SUBMIT, () => this.onSubmit());
  }

  onSubmit() {
    const name = parseName($('#crew-name-input', this.$container).value);
    const course = this.props.selectedCourse;
    if (!isValidCrewName(name)) return alert(ERROR_MESSAGES.NAME_LENGTH);
    const { SUCCESS, error } = CrewStore.dispatch(
      addCrewAction({ course, name })
    );
    if (!SUCCESS) return alert(error);
    resetForm(this.$container);
  }

  render() {
    const { selectedCourse } = this.props;
    this.$container.innerHTML = selectedCourse
      ? `
        <h3>${COURSE_NAME[selectedCourse]} 크루 관리</h3>
        <form>
          <label>크루 이름</label>
          <input type="text" id="crew-name-input" required/>
          <button id="add-crew-buttton">확인</button>
        </form>
        `
      : '';
  }
}
