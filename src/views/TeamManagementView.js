import { CREW_COURSE, CUSTOM_EVENT_NAME, EVENT_LISTENER_TYPE, SELECTOR } from '../constants.js';
import { on, qs } from '../utils/index.js';
import View from './View.js';

export default class TeamManagementView extends View {
  constructor(element = qs(`#${SELECTOR.TEAM_MANAGEMENT_VIEW}`)) {
    super(element);
    this.template = new Template();
    this.clickshowTeamMatcherButton = false;

    this.initializeElements(this.clickshowTeamMatcherButton, '', '');
  }

  initializeElements(data, course = '', mission = '') {
    this.element.innerHTML = this.template.getInitialElements(
      data,
      this.clickshowTeamMatcherButton,
      course,
      mission,
    );
  }

  show(data, course, mission) {
    this.initializeElements(data, course, mission);

    this.showTeamMatcherButton = qs(`#${SELECTOR.SHOW_TEAM_MATCHER_BUTTON}`);
    this.courseSelect = qs(`#${SELECTOR.COURSE_SELECT}`);
    this.missionSelect = qs(`#${SELECTOR.MISSION_SELECT}`);
    if (this.clickshowTeamMatcherButton) {
      this.matchTeamButton = qs(`#${SELECTOR.MATCH_TEAM_BUTTON}`);
      on(this.matchTeamButton, EVENT_LISTENER_TYPE.CLICK, (event) => {
        event.preventDefault();
        const number = qs(`#${SELECTOR.TEAM_MEMBER_COUNT_INPUT}`);
        const request = { number: number.value, course, };
        this.emit(CUSTOM_EVENT_NAME.TEAM_MATCHING, { request })
      });
    }
    

    this.bindEvents(data);
    super.show();
  }

  bindEvents(data) {
    on(this.showTeamMatcherButton, EVENT_LISTENER_TYPE.CLICK, (event) => {
      event.preventDefault();
      this.clickshowTeamMatcherButton = true;
      this.show(data, this.courseSelect.value, this.missionSelect.value);
      
    });
   
  }
}

class Template {
  getInitialElements(data, isClick, course, mission) {
    return `<section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="${SELECTOR.COURSE_SELECT}">
          <option value=${CREW_COURSE.FRONTEND}>프론트엔드</option>
          <option value=${CREW_COURSE.BACKEND}>백엔드</option>
        </select>
        <select id="${SELECTOR.MISSION_SELECT}">
          <option>숫자야구게임</option>
        </select>
        <button id="${SELECTOR.SHOW_TEAM_MATCHER_BUTTON}">확인</button>
      </form>
    </section>
    ${
      isClick
        ? `<section>
      <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input id="${SELECTOR.TEAM_MEMBER_COUNT_INPUT}" type="number" />
            <button id="${SELECTOR.MATCH_TEAM_BUTTON}" >팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul id="${SELECTOR.TEAM_MATCH_RESULT}">
          ${
            course === CREW_COURSE.FRONTEND
              ? data.frontend
                  ?.map((crew, index) => this.getCrews(crew, index + 1))
                  .join('')
              : data.backend
                  ?.map((crew, index) => this.getCrews(crew, index + 1))
                  .join('')
          }
        </ul>
      </div>
    </section>`
        : ''
    }
  `;
  }

  getCrews(data) {
    return `<li>${data}</li>`;
  }
}