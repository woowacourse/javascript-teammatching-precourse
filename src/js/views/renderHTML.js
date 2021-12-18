import $ from '../utils/dom.js';

export const renderInitHTML = () => {
  $('#app').innerHTML = `
  <div id="app">
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
    <main>
    </main>
  </div>
  `;

  $('head').insertAdjacentHTML('beforeend', '<link href="./src/css/style.css" rel="stylesheet" type="text/css" />');
};

export const renderCrewManager = () => {
  $('main').innerHTML = `
  <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input id="frontend-course" type="radio" name="course" value="frontend" />
      <label for="frontend">프론트엔드</label>
      <input id="backend-course" type="radio" name="course" value="backend" />
      <label for="backend">백엔드</label>
    </div>
  </section>
  <section id="add-crew-wrapper">
    <h3 id="add-crew-title"></h3>
    <form>
      <label>크루 이름</label>
      <input id="crew-name-input" type="text" />
      <button id="add-crew-buttton">확인</button>
    </form>
  </section>
  <section id="crew-list-wrapper">
    <h3 id="crew-list-title"></h3>
    <table id="crew-table" border="1">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody id="crew-list">
        
      </tbody>
    </table>
  </section>
  `;
};

export const renderTeamManager = () => {
  $('main').innerHTML = `
  <section>
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    <form>
      <select id="course-select">
        <option value="frontend">프론트엔드</option>
        <option value="backend">백엔드</option>
      </select>
      <select id="mission-select">
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
  </section>
  
  
  `;
};
