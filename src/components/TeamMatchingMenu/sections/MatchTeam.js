import { COURSE, MISSION } from '../../../configs/contants.js';
import Component from '../../../core/Component.js';
import { $ } from '../../../utils/helper.js';

export default class MatchTeam extends Component {
  template() {
    const { crewList, teamMatchCourse, teamMatchMission } = this.props;

    return `
      <h3>${COURSE[teamMatchCourse]} ${
      MISSION[teamMatchMission]
    } 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input type="number" id='team-member-count-input' />
            <button id='match-team-button'>팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
          ${crewList
            .filter((crew) => crew.course === teamMatchCourse)
            .reduce((acc, crew) => `${acc}<li>${crew.name}</li>`, '')}
        </ul>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '#match-team-button', () => {
      const { crewList, teamMatchCourse } = this.props;
      const count = $('#team-member-count-input').valueAsNumber;
      const filteredCrewList = crewList.filter(
        (crew) => crew.course === teamMatchCourse
      );

      if (
        count < 1 ||
        count > filteredCrewList.length ||
        !Number.isInteger(count)
      ) {
        alert('1팀당 인원 수는 1 이상, 총 크루 수 이하의 정수여야 합니다.');

        return;
      }

      this.props.matchTeam(count);
    });
  }
}
