import Component from '../../core/Component.js';

export default class TeamMatcher extends Component {
  init() {
    const { state } = this._props;
    state.add(this);
  }

  htmlTemplate() {
    const { state } = this._props;
    return `
    <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input type="number" id="team-member-count-input" />
          <button id="match-team-button">팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul>
        ${state.value.crew.map(({ name }) => `<li>${name}</li>`).join('')}
      </ul>
    </div>
    `;
  }
}
