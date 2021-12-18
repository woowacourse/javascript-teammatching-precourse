import { LOACL_STORAGE as LOCAL } from "../Storage/constant.js";
import { getLocalStorage } from "../Storage/localStorage.js";
import { TeamList } from "./Team.js";

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
        $crewList.append($li);
    });
};

export const matchingListener = (num) => {
    teamList.getTeamCount(num);
    console.log(teamList.teamCount);
};
