export const DOM = {
  $APP: '#app',
  $CREW_TAP: '#crew-tab',
};

export const EVENT = {
  CLICK: 'click',
};

export const TEMPLATE = {
  MAIN: `
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
  </header>
  <main></main>
  `,
  CREW_MANAGE: `
  <h3>크루를 관리할 코스를 선택해주세요</h3>
  <div>
    <input type="radio" name="course" value="frontend" id="frontend-course" />
    <label for="frontend-course">프론트엔드</label>
    <input type="radio" name="course" value="backend" id="backend-course" />
    <label for="backend-course">백엔드</label>
  </div>
  `,
};
