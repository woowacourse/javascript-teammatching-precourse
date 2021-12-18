import { CREW_PAGE, MAIN_PAGE } from "../constants.js";
import createCrewPage from "./crew-page.js";

export default () => {
    const $app = document.querySelector('#app');
    $app.insertAdjacentHTML('beforeend', 
    `<header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav id="${MAIN_PAGE.MAIN}">
        <ul>
          <li>
            <button id="${MAIN_PAGE.CREW}">크루 관리</button>
          </li>
          <li>
            <button id="${MAIN_PAGE.TEAM}">팀 매칭 관리</button>
          </li>
        </ul>
      </nav>
    </header>`
    )


    createCrewPage();

    const $mainPage = document.getElementById(MAIN_PAGE.MAIN);
    const $crewButton = document.getElementById(MAIN_PAGE.CREW);
    const $teamButton = document.getElementById(MAIN_PAGE.TEAM);
    
    const $crewPage = document.getElementById(CREW_PAGE.MAIN);
    //const $teamPage = document.getElementById(TEAM_PAGE.MAIN);
 
    $mainPage.addEventListener('click', e => {
        e.preventDefault();
        if(e.target === $crewButton){
            $crewPage.hidden = false;
        } else if(e.target === $teamButton){
            $crewPage.hidden = true;
        }
    })

    const $frontRadio = document.getElementById(CREW_PAGE.FRONT_RADIO);
    const $backRadio = document.getElementById(CREW_PAGE.BACK_RADIO);
    const $frontPage = document.getElementById(CREW_PAGE.FRONT_PAGE);
    const $backPage = document.getElementById(CREW_PAGE.BACK_PAGE);

    $crewPage.addEventListener('click', e=>{
        e.preventDefault();
            if(e.target === $frontRadio){
                $frontPage.hidden = false;
                $backPage.hidden = true;
            } else if(e.target === $backRadio) {
                $frontPage.hidden = true;
                $backPage.hidden = false;
            }
    })
}