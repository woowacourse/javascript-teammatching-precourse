import { initDOM } from "./view/initDOM.js";
import { selectCourseDOM } from "./view/crewDOM.js";
import { selectMissionDOM } from "./view/teamDOM.js";

class TeamMatching {
  constructor() {
    initDOM();
    this.initEventLister();
  }

  initEventLister() {
    const $crewTabButton = document.querySelector("#crew-tab");
    const $teamTabButton = document.querySelector("#team-tab");
    
    const $crewArea = document.querySelector(".crew");
    const $teamArea = document.querySelector(".team");

    $crewTabButton.addEventListener('click', e => {
      selectCourseDOM();
      $teamArea.style.display = "none";
    });

    $teamTabButton.addEventListener('click', e => {
      selectMissionDOM();
      $crewArea.style.display = "none";
    });
  }
}

new TeamMatching();