import { state } from "../models/state.js";
import {
  FRONT_END_CREW_LIST_KEY,
  BACK_END_CREW_LIST_KEY,
} from "../constants/constants.js";
import {
  deleteCrewButton,
  choicePeopleNumber,
} from "../controllers/eventController.js";

const $app = document.getElementById("app");

export function header() {
  $app.innerHTML = `
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
  `;
}

export function crewManageComponent() {
  $app.innerHTML += `
    <main id="crew-manage-component" hidden>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course" checked/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course"/>
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section>
      <h3 id="crew-manage-title">프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input"/>
        <button id="add-crew-buttton">확인</button>
      </form>
    </section>
    <section>
      <h3 id="crew-magage-list">프론트엔드 크루 목록</h3>
      <table border="1" id="crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
      </table>
    </section>
  </main>
  `;
}

export function teamGenerateComponent() {
  $app.innerHTML += `
  <main id="team-generate-component" hidden>
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          <option>프론트엔드</option>
          <option>백엔드</option>
        </select>
        <select id="mission-select">
          <option>숫자야구게임</option>
          <option>자동차경주</option>
          <option>로또</option>
          <option>장바구니</option>
          <option>결제</option>
          <option>지하철노선도</option>
          <option>성능개선</option>
          <option>배포</option>
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    </section>
  </main>
  `;
}

export function showCrewList(crewType) {
  const $crewTable = document.getElementById("crew-table");

  $crewTable.innerHTML = `
  <thead>
    <tr>
      <th></th>
      <th>크루</th>
      <th>관리</th>
    </tr>
  </thead>
  `;

  if (crewType === FRONT_END_CREW_LIST_KEY) {
    state.frontEndCrewList.map((item, index) => {
      $crewTable.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${item}</td>
      <td> <button class="delete-crew-buttton" id=${item}>삭제</button> </td>
    </tr>
  `;
    });
  } else {
    state.backEndCrewList.map((item, index) => {
      $crewTable.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${item}</td>
      <td> <button class="delete-crew-buttton" id=${item}> 삭제</button> </td>
    </tr>
  `;
    });
  }
  deleteCrewButton();
}

export function teamMatchingChoiceView(crewType) {
  const $teamGenerateComponent = document.getElementById(
    "team-generate-component"
  );

  if (crewType === FRONT_END_CREW_LIST_KEY) {
    $teamGenerateComponent.innerHTML += `
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
      <ul id="crew-table-matcing">
      </ul>
    </div>
  </section>
    `;
    choicePeopleNumber(FRONT_END_CREW_LIST_KEY);
  } else {
    $teamGenerateComponent.innerHTML += `
    <section>
    <h3>백엔드 숫자야구게임 미션의 팀 매칭</h3>
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
      <ul id="crew-table-matcing">
      </ul>
    </div>
  </section>
    `;
    choicePeopleNumber(FRONT_END_CREW_LIST_KEY);
  }
}

export function showCrewListForMatching(crewType) {
  const $crewTableMatcing = document.getElementById("crew-table-matcing");

  $crewTableMatcing.innerHTML = "";

  if (crewType === FRONT_END_CREW_LIST_KEY) {
    state.frontEndCrewList.map((item, index) => {
      const li = document.createElement("li");
      li.innerText = `${item}`;
      $crewTableMatcing.appendChild(li);
    });
  } else {
    state.backEndCrewList.map((item, index) => {
      const li = document.createElement("li");
      li.innerText = `${item}`;
      $crewTableMatcing.appendChild(li);
    });
  }
}

export function teamMatchingResult(crewType, list) {
  const $teamGenerateComponent = document.getElementById(
    "team-generate-component"
  );

  $teamGenerateComponent.innerHTML = `<section>
  <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
  <form>
    <select id="course-select">
      <option>프론트엔드</option>
      <option>백엔드</option>
    </select>
    <select id="mission-select">
      <option>숫자야구게임</option>
      <option>자동차경주</option>
      <option>로또</option>
      <option>장바구니</option>
      <option>결제</option>
      <option>지하철노선도</option>
      <option>성능개선</option>
      <option>배포</option>
    </select>
    <button id="show-team-matcher-button">확인</button>
  </form>
</section>`;

  if (crewType === FRONT_END_CREW_LIST_KEY) {
    $teamGenerateComponent.innerHTML += `
    <section>
      <h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul id="team-match-result">
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id="rematch-team-button">재매칭</button>
      </p>
    </section>
    `;
    const $teamMatchResult = document.getElementById("team-match-result");
    list.map((item, index) => {
      const li = document.createElement("li");
      li.innerText = `${item}`;
      li.id = `${index}`;
      $teamMatchResult.appendChild(li);
    });
  } else {
    $teamGenerateComponent.innerHTML += `
    <section>
      <h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul id="team-match-result">
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id="rematch-team-button">재매칭</button>
      </p>
    </section>
    `;
  }
}
