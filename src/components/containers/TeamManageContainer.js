import {
  COURSE_KOR,
  COURSE_SELECT_OPTIONS,
  MISSION_KOR,
  MISSION_SELECT_OPTIONS,
  STORAGE_KEY
} from '../../utils/constants.js';
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage.js';
import { matchRandomTeam } from '../../utils/util.js';
import { isValidTeamHeadCount } from '../../utils/validation.js';
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
      else {
        this.$target.querySelector('#team-matched').innerHTML = this.printMatchedTeamSection();
      }
    }
  }

  setEvent() {
    this.showTeamMatcherClickHandler();
    this.matchTeamClickHandler();
    this.reMatchClickHandler();
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
    <h3>${COURSE_KOR[this.$state.selectedCourse]} ${MISSION_KOR[this.$state.selectedMission]} 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form id="match-team-form">
          <label>1팀당 인원 수</label>
          <input type="number" id="team-member-count-input"/>
          <button id="match-team-button" type="submit">팀 매칭</button>
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

  printMatchedTeamSection() {
    return `
    <h3>${COURSE_KOR[this.$state.selectedCourse]} ${MISSION_KOR[this.$state.selectedMission]} 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul id="team-match-result">
        ${this.$state.teams[this.$state.selectedCourse][this.$state.selectedMission]
          .map((team) => `<li>${team}</li>`)
          .join('')}
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id="rematch-team-button">재매칭</button>
      </p>
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

  matchTeamClickHandler() {
    this.addEvent('submit', '#match-team-form', (event) => {
      event.preventDefault();

      const headCount = this.$target.querySelector('#team-member-count-input').value;

      if (isValidTeamHeadCount(headCount, this.$state.crews[this.$state.selectedCourse].length)) {
        const shuffledTeam = matchRandomTeam(this.$state.crews[this.$state.selectedCourse], headCount);
        this.$state.teams[this.$state.selectedCourse][this.$state.selectedMission] = shuffledTeam;
        this.setState({
          teams: this.$state.teams
        });
        this.saveTeamsInStroage();
      }
    });
  }

  reMatchClickHandler() {
    this.addEvent('click', '#rematch-team-button', () => {
      this.$state.teams[this.$state.selectedCourse][this.$state.selectedMission] = null;
      this.setState({
        teams: this.$state.teams
      });
      setLocalStorage(STORAGE_KEY.TEAM, this.$state.teams);
    });
  }

  saveTeamsInStroage() {
    setLocalStorage(STORAGE_KEY.TEAM, this.$state.teams);
  }
}
