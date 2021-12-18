import { CREW_PAGE, MAIN_PAGE } from "../constants.js";
import crewPage from "./crew-page.js";
export default () => {
    const $app = document.querySelector('#app');
    $app.insertAdjacentHTML('beforeend', 
    `<header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav id=${MAIN_PAGE.MAIN}>
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

    crewPage();
    
    const $crewButton = document.getElementById(MAIN_PAGE.CREW);
    const $crew = document.getElementById(CREW_PAGE.MAIN);
    $crewButton.addEventListener('click', e => {
        e.preventDefault();
        $crew.hidden = false;
    })

}