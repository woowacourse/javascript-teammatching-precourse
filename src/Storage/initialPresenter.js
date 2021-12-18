import { CrewPresenter } from "../Crew/CrewPresenter.js";
import { TeamPresenter } from "../Team/teamPresenter.js";
import { HEADER_ID as ID } from "./constant.js";
import { initialStorageSet } from "./localStorage.js";
import * as View from "../Storage/view.js";

export const InitialPresenter = function () {
    const $app = document.getElementById("app");
    const crewPresenter = new CrewPresenter();
    const teamPresenter = new TeamPresenter();
    this.init = () => {
        // initialStorageSet();/
        $app.insertAdjacentHTML("afterbegin", View.Header());
        const $crewTab = document.getElementById(ID.CREW_TAB);
        const $teamTab = document.getElementById(ID.TEAM_TAB);
        addListener($crewTab, View.CrewFirstView(), crewPresenter);
        addListener($teamTab, View.TeamFirstView(), teamPresenter);
    };

    const addListener = (button, view, presenter) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            $app.insertAdjacentHTML("beforeend", view);

            presenter.init();
        });
    };

    this.init();
};
