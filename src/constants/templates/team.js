import { COURSES, MISSIONS } from '../constants.js';

export const teamTemplates = {
  common: `
      <section id="section_1"></section>
      <section id="section_2"></section>  
      <section id="section_3"></section> 
    `,

  header: `
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form onsubmit="return false">
        <select id="course-select">
          <option value="" selected disabled hidden>코스를 선택하세요</option>
          <option value="frontend">프론트엔드</option>
          <option value="backend">백엔드</option>
        </select>
        <select id="mission-select">
          <option value="" selected disabled hidden>미션을 선택하세요</option>
          <option value="baseball">숫자야구게임</option>
          <option value="racingcar">자동차경주</option>
          <option value="lotto">로또</option>
          <option value="shopping-cart">장바구니</option>
          <option value="payments">결제</option>
          <option value="subway">지하철노선도</option>
          <option value="performance">성능개선</option>
          <option value="deploy">배포</option>
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    `,

  body(course, mission) {
    return `
      <h3>${COURSES[course]} ${MISSIONS[mission]} 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input type="number" />
            <button>팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul id="team_crew_list">
          <li>준</li>
          <li>포코</li>
        </ul>
      </div>
    `;
  },

  crew(name) {
    return `
        <li>${name}</li>
    `;
  },
};
