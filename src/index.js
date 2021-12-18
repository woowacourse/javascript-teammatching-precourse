import { initDOM } from "./view/initDOM.js";
import { initCrewManage } from "./controller/crewManage.js";
import { selectCourseDOM } from "./view/crewDOM.js";
import { selectMissionDOM } from "./view/teamDOM.js";

class TeamMatching {
  constructor() {
    initDOM();
    this.initEventLister();
    initCrewManage();
  }

  initEventLister() {
    const $crewTabButton = document.querySelector("#crew-tab");
    const $teamTabButton = document.querySelector("#team-tab");
    
    const $crewArea = document.querySelector(".crew");
    const $teamArea = document.querySelector(".team");

    $crewTabButton.addEventListener('click', e => {
      e.preventDefault();
      selectCourseDOM();
      $teamArea.style.display = "none";
    });

    $teamTabButton.addEventListener('click', e => {
      e.preventDefault();
      selectMissionDOM();
      $crewArea.style.display = "none";
    });
  }
}

new TeamMatching();