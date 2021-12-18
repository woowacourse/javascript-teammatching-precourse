import Component from '../../core/Component.js';
import {
  COURSE,
  COURSE_NAME,
  EVENT_TYPE,
  MISSION,
  MISSION_NAME,
} from '../../utils/constants.js';
import { optionGenerator } from '../../templates/teamManagement.js';
import { $ } from '../../utils/dom.js';

export default class OptionSection extends Component {
  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.SUBMIT, () => this.onSubmit());
  }

  onSubmit() {
    const course = $('#course-select > option:checked', this.$container).value;
    const mission = $(
      '#mission-select > option:checked',
      this.$container
    ).value;
    this.props.onChangeOption(course, mission);
  }

  render() {
    this.$container.innerHTML = `
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          ${optionGenerator(COURSE, COURSE_NAME)}
        </select>
        <select id="mission-select">
          ${optionGenerator(MISSION, MISSION_NAME)}
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
      `;
  }
}
