import Component from '../../core/Component.js';

export default class TeamMatchResult extends Component {
  htmlTemplate() {
    return `
    <h3>프론트엔드 숫자야구게임 조회</h3>
    <p>팀이 매칭되었습니다.</p>
    <ul id="team-match-result">
      <li>준,포코</li>
    </ul>
    <p>
      팀을 재매칭 하시겠습니까?
      <button id="rematch-team-button">재매칭</button>
    </p>
    `;
  }
}
