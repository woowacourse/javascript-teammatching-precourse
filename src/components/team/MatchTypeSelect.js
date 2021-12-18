import {
  COURSE_SELECT,
  MISSION_SELECT,
} from '../../constants/select-option.js';

import Component from '../../core/Component.js';

export default class MatchTypeSelect extends Component {
  htmlTemplate() {
    return `
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    <form>
      <select id="course-select">
        ${COURSE_SELECT.map(
          ({ name, value }) => `<option value="${value}">${name}</option>`
        )}
      </select>
      <select id="mission-select">
        ${MISSION_SELECT.map(
          ({ name, value }) => `<option value="${value}">${name}</option>`
        )}
      </select>
      <button id="show-team-matcher-button">확인</button>
    </form>
    `;
  }
}
