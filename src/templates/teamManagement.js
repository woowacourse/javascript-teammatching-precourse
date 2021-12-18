import { COURSE, MISSION } from '../constants/optionData.js';
import { TEAM_MANAGEMENT } from '../constants/selector.js';

function selectOption(key) {
  return `
    <option value=${key.ENGLISH}>${key.KOREAN}</option>
    `;
}

function selectForm() {
  return `
  <form>
    <select id=${TEAM_MANAGEMENT.ID.COURSE_SELECT}>
    ${Object.keys(COURSE).map(key => selectOption(COURSE[key]))}
  </select>
  <select id=${TEAM_MANAGEMENT.ID.MISSION_SELECT}>
  ${Object.keys(MISSION).map(key => selectOption(MISSION[key]))}
  </select>
  <button id=${TEAM_MANAGEMENT.ID.SHOW_TEAM_BUTTON}>확인</button>
  </form>
    `;
}

function selectSection() {
  return `
    <section>
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    ${selectForm()}
  </section>
    `;
}

export default function teamManagement() {
  return `
    ${selectSection()}
    `;
}
