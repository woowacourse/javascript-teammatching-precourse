import selectManageCrewCourse from './selectManageCrewCourse.js';
import selectMatchTeamCourse from "./selectMatchTeamCourse.js";

function tabMenu() {
    const templateTabMenu =
        `<header>
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
        </main>`

    document.getElementById("app").innerHTML = templateTabMenu;
    eventBinding();
}

function eventBinding() {
    document.getElementById("crew-tab").onclick = () => selectManageCrewCourse();
    document.getElementById("team-tab").onclick = () => selectMatchTeamCourse();
}

export default tabMenu;
