import { TEAM_MISSION, DOM } from '../../constants/index.js';

const TeamManage = () => `
  <section>
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    <form>
      <select id="${DOM.COURSE_SELECT}">
        <option>프론트엔드</option>
        <option>백엔드</option>
      </select>
      <select id="${DOM.MISSION_SELECT}">
        ${TEAM_MISSION.map(({ id, text }) => `<option value="${id}">${text}</option>`)}
      </select>
      <button id="${DOM.SHOW_TEAM_MATCHER_BUTTON}">확인</button>
    </form>
  </section>
  <section>
    <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input type="number" id="${DOM.TEAM_MEMBER_COUNT_INPUT}"/>
          <button id="${DOM.MATCH_TEAM_BUTTON}">팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul>
        <li>준</li>
        <li>포코</li>
      </ul>
    </div>
  </section>
  <!-- 팀 매칭이 된 경우 -->
  <section>
    <h3>프론트엔드 숫자야구게임 조회</h3>
    <p>팀이 매칭되었습니다.</p>
    <ul id="${DOM.TEAM_MATCH_RESULT}">
      <li>준,포코</li>
    </ul>
    <p>
      팀을 재매칭 하시겠습니까?
      <button id="${DOM.REMATCH_TEAM_BUTTON}">재매칭</button>
    </p>
  </section>
  `;

export default TeamManage;
