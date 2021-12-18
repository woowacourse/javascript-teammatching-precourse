import $ from '../util/$.js';
import {
  APP_ID,
  TAB_ID,
  TEAM_INPUT_ID,
  SECTION_ID,
} from '../constant/constant.js';
import tabHandler from '../eventHandler/tabHandler.js';

export default function renderManageTeam(manager) {
  const $app = $(`#${APP_ID}`);

  $app.innerHTML = `
    <header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>
        <ul>
          <li>
            <button id="${TAB_ID.MANAGE_CREW}">크루 관리</button>
          </li>
          <li>
            <button id="${TAB_ID.MANAGE_TEAM}">팀 매칭 관리</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
        <form>
          <select id="${TEAM_INPUT_ID.COURSE}">
            <option value="frontend">프론트엔드</option>
            <option value="backend">백엔드</option>
          </select>
          <select id="${TEAM_INPUT_ID.MISSION}">
            <option value="baseball">숫자야구게임</option>
            <option value="racingcar">자동차경주</option>
            <option value="lotto">로또</option>
            <option value="shopping-cart">장바구니</option>
            <option value="payments">결제</option>
            <option value="subway">지하철노선도</option>
            <option value="performance">성능개선</option>
            <option value="deploy">배포</option>
          </select>
          <button id="${TEAM_INPUT_ID.CHECK_BUTTON}">확인</button>
        </form>
      </section>
      <section id="${SECTION_ID.TEAM_MATCH}" style="display: none">
        <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
        <div>
          <div>
            <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
            <form>
              <label>1팀당 인원 수</label>
              <input id="${TEAM_INPUT_ID.TEAM_NUMBER_INPUT}" type="number" />
              <button id="${TEAM_INPUT_ID.MATCH_BUTTON}">팀 매칭</button>
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
      <section id="${TEAM_INPUT_ID.MATCH_RESULT}" style="display: none">
        <h3>프론트엔드 숫자야구게임 조회</h3>
        <p>팀이 매칭되었습니다.</p>
        <ul>
          <li>준,포코</li>
        </ul>
        <p>
          팀을 재매칭 하시겠습니까?
          <button id="${TEAM_INPUT_ID.REMATCH_BUTTON}">재매칭</button>
        </p>
      </section>
    </main>
  `;
  tabHandler(manager);
}
