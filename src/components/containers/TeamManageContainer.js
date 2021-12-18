import { STORAGE_KEY } from '../../utils/constants.js';
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

  mounted() {}

  setEvent() {}

  printSelectCourseSection() {
    return `
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select>
          <option>프론트엔드</option>
        </select>
        <select>
          <option>숫자야구게임</option>
        </select>
        <button>확인</button>
      </form>
    `;
  }
}
