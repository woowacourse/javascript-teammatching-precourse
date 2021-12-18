import { LOACL_STORAGE as LOCAL, TEAM_TAB } from "../Storage/constant.js";
import { getLocalStorage } from "../Storage/localStorage.js";
import { TeamList } from "./Team.js";
import { TeamAfterMatchingView } from "../Storage/view.js";
const teamList = new TeamList();

export const showTeamList = (team) => {
    const $crewList = document.getElementById("crew-list");
    let list = [];
    if (team === "프론트엔드") {
        list = JSON.parse(getLocalStorage(LOCAL.FRONTEND_CREW));
    } else {
        list = JSON.parse(getLocalStorage(LOCAL.BACKEND_CREW));
    }
    teamList.list = list;
    list.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerText = element.name;
        teamList.crewId.push(element.id);
        $crewList.append($li);
    });
};

export const matchingListener = (num) => {
    teamList.getTeamCount(num);
    teamList.getRandomMatch();
};

export const showLastView = (mainContainer, course, mission) => {
    mainContainer.removeChild(mainContainer.children[1]);
    mainContainer.insertAdjacentHTML(
        "beforeend",
        TeamAfterMatchingView(course, mission),
    );
    const $result = document.getElementById(TEAM_TAB.RESULT);
    const $rematch = document.getElementById(TEAM_TAB.REMATCH_BTN);

    setTeamList($result);
    setRematch($rematch, $result);
};

const setTeamList = (result) => {
    teamList.teamList.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerText = element.join(",");
        result.append($li);
    });
};

const setRematch = (rematch, result) => {
    rematch.addEventListener("click", function (e) {
        e.preventDefault();
        result.innerHTML = "";
        teamList.refreshTeamList();
        teamList.getRandomMatch();
        setTeamList(result);
    });
};
