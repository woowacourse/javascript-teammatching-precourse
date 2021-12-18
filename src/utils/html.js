export const HTML_OF_HEADER = `
<header>
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
</header>`;



export const HTML_OF_CREW_RADIO = `
<div id="app">
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course"/>
        <label for="backend">백엔드</label>
      </div>
    </section>
  </main>
</div>`;

export const HTML_OF_FRONT_CHECKED_RADIO = `
<div id="app">
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course" checked/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course"/>
        <label for="backend">백엔드</label>
      </div>
    </section>
  </main>
</div>`;

export const HTML_OF_BACK_CHECKED_RADIO = `
<div id="app">
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course" checked/>
        <label for="backend">백엔드</label>
      </div>
    </section>
  </main>
</div>`;

export const HTML_OF_CREW_INPUT = `
    <section>
      <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input"/>
        <button id="add-crew-buttton">확인</button>
      </form>
    </section>
    <section>
    <h3>프론트엔드 크루 목록</h3>
    </section>`;



export const HTML_OF_CREW_TABLE = `
<section>  
      <table border="1" id="crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
      </table>
    </section>`;



export const HTML_OF_TEAM_TAB = `
<div id="app">
  <main>
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          <option>프론트엔드</option>
          <option>백엔드</option>
        </select>
        <select id="mission-select">
          <option>숫자야구게임</option>
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    </section>
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
        <ul id="team-match-result">
          <li>준</li>
          <li>포코</li>
        </ul>
      </div>
    </section>
    <!-- 팀 매칭이 된 경우 -->
    <section>
      <h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul>
        <li>준,포코</li>
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id="rematch-team-button">재매칭</button>
      </p>
    </section>
  </main>
</div>`;