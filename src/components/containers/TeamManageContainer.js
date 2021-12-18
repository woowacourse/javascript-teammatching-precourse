import { COURSE_SELECT_OPTIONS, MISSION_SELECT_OPTIONS, STORAGE_KEY } from '../../utils/constants.js';
import { getLocalStorage } from '../../utils/LocalStorage.js';
import Component from '../core/Component.js';

export default class TeamManageContainer extends Component {
  init() {
    this.$state = {
      crews: getLocalStorage(STORAGE_KEY.CREW, {}),
      teams: getLocalStorage(STORAGE_KEY.TEAM, {}),
      selectedCourse: '',
      selectedMission: ''
    };
  }

  template() {
    return `
      <section id="select-course-mission"></section>
      <section id="team-not-matched"></section>
      <section id="team-matched"></section>
    `;
  }

  mounted() {
    this.$target.querySelector('#select-course-mission').innerHTML = this.printSelectCourseSection();
  }

  setEvent() {}

  printSelectCourseSection() {
    return `
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          ${COURSE_SELECT_OPTIONS.map(({ name, value }) => `<option value="${value}">${name}</option>`)}
        </select>
        <select id="mission-select">
        ${MISSION_SELECT_OPTIONS.map(({ name, value }) => `<option value="${value}">${name}</option>`)}
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    `;
  }
}
