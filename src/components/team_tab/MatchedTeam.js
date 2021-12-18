import Component from "../../core/Component.js";

export default class MatchedTeam extends Component {
  setup() {
    console.log("MatchedTeam", this);
  }

  template() {
    const { matchedTeam } = this.$props;

    return `
        <h3>프론트엔드 숫자야구게임 조회</h3>
        <p>팀이 매칭되었습니다.</p>
        <ul id="team-match-result">
            ${matchedTeam
              .map((team) => {
                return `
                <li>${team.join(",")}</li>
              `;
              })
              .join("")}
        </ul>
        <p>
        팀을 재매칭 하시겠습니까?
        <button id="rematch-team-button">재매칭</button>
        </p>
    `;
  }

  mounted() {
    const $rematchTeamButton = document.querySelector("#rematch-team-button");

    this.addEvent("click", $rematchTeamButton, (e) => this.onClick(e));
  }

  onClick(e) {
    console.log(e);
  }
}
