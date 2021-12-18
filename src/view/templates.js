import { ID, CLASS, COURSE, MISSION } from '../constants/constants.js';

const templates = Object.freeze({
  topMenuContainerHTML: `
<header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id=${ID.crewTabButton}>크루 관리</button>
        </li>
        <li>
          <button id=${ID.teamTabButton}>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
</header>
`,

  crewManagerTabHTML: `
<main class="${CLASS.tab} ${CLASS.crewTabBox}">
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input id=${ID.frontendCourse}   type="radio" name=${COURSE.course} value=${COURSE.frontend} checked />
        <label for=${COURSE.frontend}>프론트엔드</label>
        <input id=${ID.backendCourse}  type="radio" name=${COURSE.course} value=${COURSE.backend} />
        <label for=${COURSE.backend}>백엔드</label>
      </div>
    </section>

    <section id="${ID.courseSelectSection}"></section>

</main>

`,

  courseSelectSectionHTML: (courseName) => `
      <h3>${courseName} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id=${ID.crewNameInput} />
        <button id=${ID.addCrewButton}>확인</button>
      </form>
    </section>
    <section>
      <h3>${courseName} 크루 목록</h3>
      <table id=${ID.crewTable} border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody id=${ID.crewTableTbody}> 
        
        <!-- 추가된 크루 테이블 표시 crewTableTbodyHTML --!>

        </tbody>
      </table>
  </main>
    `,

  crewTableTbodyHTML: (order, crewName) => `
    <tr>
        <td>${order}</td>
        <td>${crewName}</td>
        <td>
            <button class=${CLASS.deleteCrewButton}>삭제</button>
        </td>
    </tr>
`,

  teamMatchingTabHTML: `
  <main class="${CLASS.tab} ${CLASS.teamTabBox}">
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id=${ID.courseSelect}>
          <option value=${COURSE.frontend}>프론트엔드</option>
          <option value=${COURSE.backend}>백엔드</option>
        </select>
        <select id=${ID.missionSelect}>
          <option value=${MISSION.baseball}>${MISSION.baseballKor}</option>
          <option value=${MISSION.racingCar}>${MISSION.racingCarKor}</option>
          <option value=${MISSION.lotto}>${MISSION.lottoKor}</option>
          <option value=${MISSION.shoppingCart}>${MISSION.shoppingCartKor}</option>
          <option value=${MISSION.payments}>${MISSION.paymentsKor}</option>
          <option value=${MISSION.subway}>${MISSION.subwayKor}</option>
          <option value=${MISSION.performance}>${MISSION.paymentsKor}</option>
          <option value=${MISSION.deploy}>${MISSION.deployKor}</option>
        </select>
        <button id=${ID.showTeamMatcherButton}>확인</button>
      </form>
    </section>

<!--팀매칭 관리할 코스와 미션을 선택한 경우 matchTeamHTML를 innerHTML--!>
    <section id="${ID.matchTeamSection}"></section>

<!--팀매칭이 된 경우 showMatchedTeamHTML를 innerHTML--!>
    <section id="${ID.showMatchedTeamSection}></section>

  </main>
`,

  matchTeamHTML: `
    <section>
      <h3>프론트엔드 ${MISSION.baseballKor} 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input id=${ID.teamMemberCountInput} type="number" />
            <button id=${ID.matchTeamButton}>팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul id=${ID.teamMatchResult}>
          <li>준</li>
          <li>포코</li>
        </ul>
      </div>
    </section>
    `,

  showMatchedTeamHTML: `
    <!-- 팀 매칭이 된 경우 -->
    <section>
      <h3>프론트엔드 ${MISSION.baseballKor} 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul>
        <li>준,포코</li>
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id=${ID.rematchTeamButton}>재매칭</button>
      </p>
    </section>
    `,

  app: () => document.getElementById(`${ID.app}`),
  crewTabButton: () => document.getElementById(`${ID.crewTabButton}`),
  teamTabButton: () => document.getElementById(`${ID.teamTabButton}`),
  frontendCourse: () => document.getElementById(`${ID.frontendCourse}`),
  backendCourse: () => document.getElementById(`${ID.backendCourse}`),
  crewNameInput: () => document.getElementById(`${ID.crewNameInput}`),
  addCrewButton: () => document.getElementById(`${ID.addCrewButton}`),
  crewTable: () => document.getElementById(`${ID.crewTable}`),
  courseSelect: () => document.getElementById(`${ID.courseSelect}`),
  missionSelect: () => document.getElementById(`${ID.missionSelect}`),
  showTeamMatcherButton: () => document.getElementById(`${ID.showTeamMatcherButton}`),
  teamMemberCountInput: () => document.getElementById(`${ID.teamMemberCountInput}`),
  matchTeamButton: () => document.getElementById(`${ID.matchTeamButton}`),
  teamMatchResult: () => document.getElementById(`${ID.teamMatchResult}`),
  rematchTeamButton: () => document.getElementById(`${ID.rematchTeamButton}`),
  crewTableTbody: () => document.getElementById(`${ID.crewTableTbody}`),
  matchTeamSection: () => document.getElementById(`${ID.matchTeamSection}`),
  showMatchedTeamSection: () => document.getElementById(`${ID.showMatchedTeamSection}`),
  courseSelectSection: () => document.getElementById(`${ID.courseSelectSection}`),

  crewTab: () => document.querySelector(`.${CLASS.crewTabBox}`),
  teamTab: () => document.querySelector(`.${CLASS.teamTabBox}`),
  allTab: () => document.querySelectorAll(`.${CLASS.tab}`),
  deleteCrewButtons: () => document.querySelectorAll(`.${CLASS.deleteCrewButton}`),
});

export { templates };
