import { HEADER_ID as ID } from "./constant.js";
import { CrewPresenter } from "../Crew/CrewPresenter.js";
import { TeamPresenter } from "../Team/teamPresenter.js";
export const InitialPresenter = function () {
    const $app = document.getElementById("app");

    this.init = () => {
        $app.innerHTML += header;
        const $crewTab = document.getElementById(ID.CREW_TAB);
        const $teamTab = document.getElementById(ID.TEAM_TAB);
        addListener($crewTab, CrewPresenter());
        addListener($teamTab, TeamPresenter());
    };

    const addListener = (button, presenter) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            $app.innerHTML += presenter;
        });
    };

    const header = `<header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
        <ul>
            <li>
                <button id = ${ID.CREW_TAB}>크루 관리</button>
            </li>
            <li>
                <button id = ${ID.TEAM_TAB}>팀 매칭 관리</button>
            </li>
        </ul>
    </nav>
    </header>`;
    this.init();
};
