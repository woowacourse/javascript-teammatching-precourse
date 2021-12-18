import { ALERT_MSG } from "../../utils/constants.js";
import { showTeam } from "../../views/teamManager/showTeam.js";
import { isValidMemberCount } from "./checkInput.js";
import { matchTeam } from "./matchTeam.js";

const onClickShowTeamMatcherButton = () => {
  const $showTeamButton = document.getElementById("show-team-matcher-button");

  $showTeamButton.addEventListener("click", e => {
    e.preventDefault();
    const course = document.getElementById("course-select").value;
    const mission = document.getElementById("mission-select").value;

    showTeam(course, mission);
  });
};

const onClickTeamMatchButton = () => {
  const $matchButton = document.getElementById("match-team-button");

  $matchButton.addEventListener("click", e => {
    e.preventDefault();
    const minMemberCount = document.getElementById("team-member-count-input");

    if (isValidMemberCount(minMemberCount.value)) {
      const course = document.getElementById("course-select").value;
      const mission = document.getElementById("mission-select").value;
      matchTeam(course, mission, parseInt(minMemberCount.value, 10));
      showTeam(course, mission);
    } else {
      alert(ALERT_MSG.wrongMemberCount);
    }
  });
};

const onClickRematchButton = () => {
  const $rematchButton = document.getElementById("rematch-team-button");

  $rematchButton.addEventListener("click", () => {
    const course = document.getElementById("course-select").value;
    const mission = document.getElementById("mission-select").value;
    localStorage.removeItem(`${course}-${mission}`);
    showTeam(course, mission);
  });
};

export {
  onClickShowTeamMatcherButton,
  onClickTeamMatchButton,
  onClickRematchButton,
};
