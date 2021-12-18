import { COURSE_SELECT_MAP, DOM, MISSION_SELECT_MAP } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';

class TeamMatchingView {
  constructor({ mainSection }) {
    this.$app = mainSection;
    this.mount();
  }

  mount() {
    this.$app.innerHTML = this.generateTemplate();
  }

  generateTemplate() {
    return `
    ${this.createCourseAndMissionSelectFormTemplate()}
    `;
  }

  createCourseAndMissionSelectFormTemplate() {
    return ` <section>
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    <form id="${DOM.SHOW_TEAM_MATCHER_FORM_ID}">
      <select id="${DOM.COURSE_SELECT_ID}">
        ${this.createOptions(COURSE_SELECT_MAP)}
      </select>
      <select id="${DOM.MISSION_SELECT_ID}">${this.createOptions(MISSION_SELECT_MAP)}</select>
      <button id="${DOM.SHOW_TEAM_MATCHER_BUTTON_ID}">확인</button>
    </form>
  </section>
  <section id="${DOM.CREW_TEAM_MACHING_SECTION}"></section>
  `;
  }

  createOptions(map) {
    return `${Object.keys(map).map((key) => `<option value="${map[key]}">${key}</option>`)}`;
  }

  renderMatchedTeam(course, mission, team) {
    $(DOM.CREW_TEAM_MACHING_SECTION).innerHTML = this.createCrewMatchedTeamTemplate(
      course,
      mission,
      team
    );
  }

  renderNotMatchedTeam(course, mission, crewList) {
    $(DOM.CREW_TEAM_MACHING_SECTION).innerHTML = this.createCrewNotMatchedTemplate(
      course,
      mission,
      crewList
    );
  }

  createCrewNotMatchedTemplate(course, mission, crewList) {
    return `
    <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
      <div>
        <div><p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form id="${DOM.TEAM_MEMBER_COUNT_FORM_ID}">
            <label>1팀당 인원 수</label>
            <input id="${DOM.TEAM_MEMBER_COUNT_INPUT_ID}" type="number" />
            <button id="${DOM.MATCH_TEAM_BUTTON}">팀 매칭</button>
          </form>
        </div><h4>크루 목록</h4>
        <ul>${this.createCrewListTemplate(crewList)}</ul>
      </div>
    `;
  }

  createCrewMatchedTeamTemplate(course, mission, team) {
    return ` <h3>프론트엔드 숫자야구게임 조회</h3>
    <p>팀이 매칭되었습니다.</p>
    <ul>
      ${this.createTeamTemplate(team)}
    </ul>
    <p>
      팀을 재매칭 하시겠습니까?
      <button id="${DOM.REMATCH_TEAM_BUTTON}">재매칭</button>
    </p>`;
  }

  createCrewListTemplate(crewList) {
    return `${crewList.map((crew) => `<li>${crew.name}</li>`).join('')}`;
  }

  createTeamTemplate(team) {
    return ``;
  }
}
export default TeamMatchingView;
