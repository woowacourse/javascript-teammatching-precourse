import { COURSE, MISSION } from '../../../configs/contants.js';
import Component from '../../../core/Component.js';

export default class MatchResult extends Component {
  template() {
    const { matchedTeamList } = this.props;
    const { course, mission, teamList } = matchedTeamList;

    const matchResult = `
      <ul id='team-match-result'>
        ${teamList.reduce(
          (acc, team) => `
          ${acc}
          <li>${team.map((crew) => crew.name).join(',')}</li>
        `,
          ''
        )}
      </ul>
    `;

    return `
      <h3>${COURSE[course]} ${MISSION[mission]} 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      ${matchResult}
      <p>
        팀을 재매칭 하시겠습니까?
        <button id='rematch-team-button'>재매칭</button>
      </p>
    `;
  }

  setEvent() {
    this.addEvent('click', '#rematch-team-button', () => {
      const { course, mission } = this.props.matchedTeamList;

      this.props.rematch(course, mission);
    });
  }
}
