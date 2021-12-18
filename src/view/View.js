import { $, default as DOM } from '../utils/DOMUtils.js';

export default class View {
  constructor() {
    this.showMainCompoent();
    this.showCrewComponent();
    this.showTeamComponent();
    DOM.hideComponents();
  }

  showMainCompoent() {
    $('#app').insertAdjacentHTML(
      'beforeend',
      /*html*/ `
        <header>
        <h1>우테코 크루와 팀 매칭 관리 보드</h1>
        <nav>
          <ul>
            <li>
              <button data-action="crewTab" id="crew-tab">크루 관리</button>
            </li>
            <li>
              <button data-action="teamTab" id="team-tab">팀 매칭 관리</button>
            </li>
          </ul>
        </nav>
      </header>
      <div id="component"></div>`,
    );
  }

  showCrewComponent() {
    $('#component').insertAdjacentHTML(
      'beforeend',
      /*html*/ `
        <main id="crew-component">
      <section>
        <h3>크루를 관리할 코스를 선택해주세요</h3>
        <div>
          <input data-action="frontendRadioButton" id="frontend-course" type="radio" name="course" value="frontend" />
          <label for="frontend">프론트엔드</label>
          <input data-action="backendRadioButton" id="backend-course" type="radio" name="course" value="backend" />
          <label for="backend">백엔드</label>
        </div>
      </section>

      <div id="crew-manager-component" style="display: none;">
        <section >
            <h3 id="crew-manage-title">프론트엔드 크루 관리</h3>
            <form>
            <label>크루 이름</label>
            <input id="crew-name-input" type="text" />
            <button data-action="createCrew" id="add-crew-buttton">확인</button>
            </form>
        </section>

        <section >
            <h3 id="crew-list-title">프론트엔드 크루 목록</h3>
            <table id="crew-table" border="1">
            <thead>
                <tr>
                <th></th>
                <th>크루</th>
                <th>관리</th>
                </tr>
            </thead>
            <tbody id="crew-list-tbody"></tbody>
            </table>
        </section>
      </div>
    </main>
        `,
    );
  }

  showTeamComponent() {
    $('#component').insertAdjacentHTML(
      'beforeend',
      /*html*/ `
    <main id="team-component">
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
        <button data-action="showTeamMatcher" id="show-team-matcher-button">확인</button>
      </form>
    </section>

    <div id="case-mached-component" >
        <section id="not-mached-component" style="display: none;">
        <h3 id="team-matching-title">프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
        <div>
            <div>
            <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
            <form>
                <label>1팀당 인원 수</label>
                <input id="team-member-count-input" type="number" />
                <button data-action="matchTeam" id="match-team-button">팀 매칭</button>
            </form>
            </div>
            <h4>크루 목록</h4>
            <ul id="crew-ul">
                <li>준</li>
                <li>포코</li>
            </ul>
        </div>
        </section>

        <!-- 팀 매칭이 된 경우 -->
        <section id="ok-mached-component"  style="display: none;">
        <h3>프론트엔드 숫자야구게임 조회</h3>
        <p>팀이 매칭되었습니다.</p>
        <ul id="team-match-result">
            <li>준,포코</li>
        </ul>
        <p>
            팀을 재매칭 하시겠습니까?
            <button data-action="rematch" id="rematch-team-button">재매칭</button>
        </p>
        </section>
    </div>
  </main>
    `,
    );
  }
}
