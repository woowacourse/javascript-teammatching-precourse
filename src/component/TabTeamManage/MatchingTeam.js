import Component from '../../core/Component.js';
import crew from '../../store/Crew.js';
import team from '../../store/Team.js';
import { ID } from '../../constant/selector.js';
import { COURSE_MAP, MISSION_MAP } from '../../constant/data.js';

export default class MatchingTeam extends Component {
  init() {
    team.add(this);
  }

  template() {
    const { selectedCourse, selectedMission } = team.getValue();
    return `
      <div ${selectedCourse === null || selectedMission === null ? 'hidden' : ''}>
        <h3>${COURSE_MAP[selectedCourse]} ${MISSION_MAP[selectedMission]}미션의 팀 매칭</h3>
        <div>
          <div>
            <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
            ${this.templateForm()}
          </div>
          ${this.templateCrewList()}
        </div>
      </div>
    `;
  }

  templateForm() {
    return `
      <form>
        <label>1팀당 인원 수</label>
        <input type="number" id="${ID.MEMBER_COUNT_INPUT}"/>
        <button>팀 매칭</button>
      </form>
    `;
  }

  templateCrewList() {
    return `
      <h4>크루 목록</h4>
      <ul>
        <li>준</li>
        <li>포코</li>
      </ul>
    `;
  }
}
