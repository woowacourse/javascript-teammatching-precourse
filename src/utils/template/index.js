import { CLASS, ID } from '../constants.js';

export const TAB_MENUS_TEMPLATE = `
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id=${ID.CREW_TAB}>크루 관리</button>
        </li>
        <li>
          <button id=${ID.TEAM_TAB}>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main id="content">
  </main>
`;

export const CREW_COURSE_TEMPLATE = `
  <section>
  <h3>크루를 관리할 코스를 선택해주세요</h3>
  <div>
    <input id=${ID.FRONTEND_COURSE} type="radio" name="course" value="frontend" />
    <label for="frontend">프론트엔드</label>
    <input id=${ID.BACKEND_COURSE} type="radio" name="course" value="backend"/>
    <label for="backend">백엔드</label>
  </div>
  </section>
  <section id=${ID.CREW_MANAGE_SECTION}>
  </section> 
`;

export const CREW_MANAGE_TEMPLATE = (crewList, course) => {
  const courseName = course === 'frontend' ? '프론트엔드' : '백엔드';
  return `
    <section>
      <h3>${courseName} 크루 관리</h3>
      <form id=${ID.CREW_NAME_FORM}>
        <label>크루 이름</label>
        <input id=${ID.CREW_NAME_INPUT} type="text"/>
        <button id=${ID.ADD_CREW_BUTTON}>확인</button>
      </form>
    </section>
    <section>
      <h3>${courseName} 크루 목록</h3>
      <table border="1" id=${ID.CREW_TABLE}>
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody id=${ID.CREW_LIST}>
      ${getCrewListTemplate(crewList)}
        </tbody>
      </table>
    </section>
`;
};

export const getCrewListTemplate = (crewList) => {
  return `
    ${crewList
      .map(
        (crew, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${crew}</td>
        <td>
          <button id=${index} class=${CLASS.DELETE_CREW_BUTTON}>삭제</button>
        </td>
      </tr>
    `
      )
      .join('')}`;
};

export const COURSE_MISSION_SELECT_TEMPLATE = `
  <section>
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    <form id=${ID.TEAM_MATCHER_FORM}>
      <select id=${ID.COURSE_SELECT}>
        <option>frontend</option>
        <option>backend</option>
      </select>
      <select id=${ID.MISSION_SELECT}>
        <option>baseball</option>
        <option>racingcar</option>
        <option>lotto</option>
        <option>shopping-cart</option>
        <option>payments</option>
        <option>submay</option>
        <option>performance</option>
        <option>deploy</option>
      </select>
      <button id=${ID.SHOW_TEAM_MATCHER_BUTTON}>확인</button>
    </form>
  </section>
  <section id=${ID.TEAM_MANAGE_SECTION}>
  </section> 

`;

const getCrewTagList = (crewList) => {
  return `
    ${crewList
      .map(
        (crew) => `
        <li>${crew}</li>
    `
      )
      .join('')}`;
};

export const getTeamMatchingTemplate = (crewList, course) => {
  const courseName = course === 'frontend' ? '프론트엔드' : '백엔드';
  return `
    <section>
      <h3>${courseName} 숫자야구게임 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form id=${ID.TEAM_MEMBER_COUNT_FORM}>
            <label>1팀당 인원 수</label>
            <input id=${ID.TEAM_MEMBER_COUNT_INPUT} type="number" />
            <button id=${ID.MATCH_TEAM_BUTTON}>팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
        ${getCrewTagList(crewList)}
        </ul>
      </div>
    </section>
`;
};

export const getTeamMatchingResultTemplate = (course, result) => {
  return `
    <section>
      <h3>${course} 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul id=${ID.TEAM_MATCH_RESULT}>
        ${result.map(
          (item) => `
        <li>${item.join(',')}</li>
        `
        )}
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id=${ID.REMATCH_TEAM_BUTTON}>재매칭</button>
      </p>
    </section>
`;
};
