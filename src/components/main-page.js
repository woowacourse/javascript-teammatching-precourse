import { MAIN_PAGE } from "../constants.js";

export default () => {
    const $app = document.querySelector('#app');
    $app.insertAdjacentHTML('beforeend', 
    `<header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>
        <ul>
          <li>
            <button id=${MAIN_PAGE.CREW}>크루 관리</button>
          </li>
          <li>
            <button id=${MAIN_PAGE.TEAM}>팀 매칭 관리</button>
          </li>
        </ul>
      </nav>
    </header>`
    )
}