import Component from '../../core/Component.js';
import team from '../../store/Team.js';
import { ID } from '../../constant/selector.js';
import { COURSE, MISSION_VALUE, MISSION_NAME } from '../../constant/data.js';
import EVENT from '../../constant/event.js';

export default class SelectionMission extends Component {
  init() {
    team.add(this);
  }

  template() {
    return `
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        ${this.templateCourse()}
        ${this.templateMission()}
        <button id="${ID.TEAM_MATCHER_BUTTON}">확인</button>
      </form>
    `;
  }

  templateCourse() {
    const selectedCourse = team.getSelectedCourse();

    return `
      <select id="${ID.COURSE_SELECTOR}">
        <option value="${COURSE.FRONTEND}" ${selectedCourse === null || selectedCourse === COURSE.FRONTEND ? 'selected' : ''}>프론트엔드</option>
        <option value="${COURSE.BACKEND}" ${selectedCourse === COURSE.BACKEND ? 'selected' : ''}>백엔드</option>
      </select>
    `;
  }

  templateMission() {
    const selectedMission = team.getSelectedMission();

    return `
      <select id="${ID.MISSION_SELECTOR}">
        ${MISSION_VALUE.map((value, index)=>`
          <option value="${value}" ${selectedMission === value ? 'selected' : ''}>${MISSION_NAME[index]}</option>
        `).join('')}
      </select>
    `;
  }

  setEvent() {
    this.addEvent(EVENT.CLICK, `#${ID.TEAM_MATCHER_BUTTON}`, (event) => {
      event.preventDefault();

      const selectedCourse = this.$element.querySelector(`#${ID.COURSE_SELECTOR}`).value;
      const selectedMisson = this.$element.querySelector(`#${ID.MISSION_SELECTOR}`).value;

      team.selectOption(selectedCourse, selectedMisson);
    });
  }
}
