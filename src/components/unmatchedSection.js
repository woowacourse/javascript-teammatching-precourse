import Component from "../common/component.js";

const TEAM_MEMBER_COUNT_INPUT_ID = "team-member-count-input";
const MATCH_TEAM_BUTTON_ID = "match-team-button";

export default class UnmatchedSelection extends Component {
  template() {
    return `
    <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        ${this.getFormSection()}
      </div>
      <h4>크루 목록</h4>
      ${this.getCrewListSection()}
    </div>`;
  }

  getHeaderSection() {
    return `<h3>${this.$props.courseName} ${this.$props.missionName} 미션의 팀 매칭</h3>`;
  }

  getCrewListSection() {
    return `
    <ul>
      ${this.$props.crews.map((c) => `<li>${c}</li>`).join("")}
    </ul>`;
  }

  getFormSection() {
    return `
    <form>
      <label>1팀당 인원 수</label>
      <input id=${TEAM_MEMBER_COUNT_INPUT_ID} type="number" />
      <button id=${MATCH_TEAM_BUTTON_ID} >팀 매칭</button>
    </form>`;
  }
}
