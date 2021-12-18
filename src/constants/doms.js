//crew DOM
export const start = `
  <section>
  <h1>우테코 크루와 팀 매칭 관리 보드</h1>
  <nav>
    <ul>
      <li>
        <button id="crew-tab">크루 관리</button>
      </li>
      <li>
        <button id="team-tab">팀 매칭 관리</button>
      </li>
    </ul>
  </nav>
  </section>
`;

export const selectCourse = `
  <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" />
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" />
      <label for="backend">백엔드</label>
    </div>
  </section> 
`;

export const crewManage_input = `
  <section>
    <h3>프론트엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id="crew-name-input"/>
      <button id="add-crew-buttton">확인</button>
    </form>
  </section>
`;

export const crewManage_table = `
  <section>
  <h3>프론트엔드 크루 목록</h3>
  <table border="1" id="crew-table">
    <thead>
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
  </section>
`;

//team DOM
export const selectMission = `
  <section>
  <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
  <form>
    <select id="course-select">
      <option id="frontend-course">프론트엔드</option>
      <option id="backend-course">백엔드</option>
    </select>
    <select id="mission-select">
      <option id="baseball">숫자야구게임</option>
      <option id="racingcar">자동차경주</option>
      <option id="lotto">로또</option>
      <option id="shopping-cart">장바구니</option>
      <option id="payments">결제</option>
      <option id="subway">지하철노선도</option>
      <option id="performance">성능개선</option>
      <option id="deploy">배포</option>
    </select>
    <button id="show-team-matcher-button">확인</button>
  </form>
  </section>
`;

export const teamMatching_before = `
  <section>
  <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
  <div>
    <div>
      <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
      <form>
        <label>1팀당 인원 수</label>
        <input type="number" id="team-member-count-input"/>
        <button id="match-team-button">팀 매칭</button>
      </form>
    </div>
    <h4>크루 목록</h4>
    <ul id="team-match-none-list">
    
    </ul>
  </div>
  </section>
`;

export const teamMatching_after = `
  <section id="team-match-result">
    <h3>프론트엔드 숫자야구게임 조회</h3>
    <p>팀이 매칭되었습니다.</p>
    <ul id="team-match-done-list">
      
    </ul>
    <p>
      팀을 재매칭 하시겠습니까?
      <button id="rematch-team-button">재매칭</button>
    </p>
  </section>
`;