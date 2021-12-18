import Component from "../common/component.js";

const TEAM_MATCH_RESULT_ID = "team-match-result";
const REMATCH_TEAM_BUTTON_ID = "rematch-team-button";

export default class UnmatchedSelection extends Component {
  template() {
    return `
    ${this.getHeaderSection()}
    <p>팀이 매칭되었습니다.</p>
    ${this.getGroupListSection()}    
    ${this.getReplaySection()}`;
  }

  getHeaderSection() {
    return `<h3>${this.$props.courseName} ${this.$props.missionName} 조회</h3>`;
  }

  getGroupListSection() {
    return `
    <ul id=${TEAM_MATCH_RESULT_ID}>
      ${this.$props.groupLists
        .map((members) => `<li>${this.getSingleGroupString(members)}</li>`)
        .join("")}
    </ul>`;
  }

  getSingleGroupString(members) {
    return members.join(",");
  }

  getReplaySection() {
    return `
    <p>
      팀을 재매칭 하시겠습니까?
      <button id=${REMATCH_TEAM_BUTTON_ID}>재매칭</button>
    </p>`;
  }
}
