import * as View from "../Storage/View.js";
import { TEAM_TAB, EMPTY } from "../Storage/constant.js";
import {
    showTeamList,
    matchingListener,
    showLastView,
} from "./teamContainer.js";
export const TeamPresenter = function () {
    this.init = () => {
        const $courseSelect = document.getElementById(TEAM_TAB.COURSE_SELECT);
        const $missionSelect = document.getElementById(TEAM_TAB.MISSION_SELECT);
        const $showButton = document.getElementById(TEAM_TAB.SHOW_TEAM_BTN);
        const $mainContainer = document.getElementById("main-container");
        const course = $courseSelect.options[$courseSelect.selectedIndex].value;
        const mission =
            $missionSelect.options[$missionSelect.selectedIndex].value;
        $showButton.addEventListener("click", function (e) {
            e.preventDefault();

            $mainContainer.insertAdjacentHTML(
                "beforeend",
                View.TeamBeforeMatchingView(course, mission),
            );
            showTeamList(course);
            setSecondView($mainContainer, course, mission);
        });
    };

    const setSecondView = (mainContainer, course, mission) => {
        const $memberCount = document.getElementById(TEAM_TAB.TEAM_INPUT);
        const $matchingButton = document.getElementById(TEAM_TAB.MATCH_BTN);

        $matchingButton.addEventListener("click", function (e) {
            e.preventDefault();
            const num = Number($memberCount.value);
            matchingListener(num);
            showLastView(mainContainer, course, mission);
        });
    };
};
