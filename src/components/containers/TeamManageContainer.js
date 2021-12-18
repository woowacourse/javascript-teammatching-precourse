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
    this.$target.querySelector('#select-course-mission').innerHTML = this.printSelectSection();
    const { teams, selectedCourse, selectedMission } = this.$state;
    if (selectedCourse !== '' && selectedMission !== '') {
      if (!teams[selectedCourse] || (teams[selectedCourse] && !teams[selectedCourse][selectedMission]))
        this.$target.querySelector('#team-not-matched').innerHTML = this.printNotMatchedTeamSection();
    }
  }

  setEvent() {
    this.showTeamMatcherClickHandler();
  }

  printSelectSection() {
    return `
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form id="select-course-mission-form">
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

  printNotMatchedTeamSection() {
    return `
    <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input type="number" id="team-member-count-input"/>
          <button id="match-team-button">팀 매칭</button>
        </form>
      </div>
      ${this.printCrewList()}
    </div>
    `;
  }

  printCrewList() {
    return `
    <h4>크루 목록</h4>
    <ul>
      ${this.$state.crews[this.$state.selectedCourse].map((crew) => `<li>${crew}</li>`).join('')}
    </ul>
    `;
  }

  showTeamMatcherClickHandler() {
    this.addEvent('click', '#show-team-matcher-button', (event) => {
      event.preventDefault();

      this.setState({
        selectedCourse: this.$target.querySelector('#course-select').value,
        selectedMission: this.$target.querySelector('#mission-select').value
      });
    });
  }
}
