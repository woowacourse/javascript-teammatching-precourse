import { hideAllManager } from "../../views/common/hideAllManager.js";
import VisibleCrewManager from "../../views/crewManager/visibleCrewManager.js";
import VisibleTeamManager from "../../views/teamManager/visibleTeamManager.js";

const onClickCrewTab = () => {
  const $crewTab = document.getElementById("crew-tab");

  $crewTab.addEventListener("click", () => {
    hideAllManager();
    new VisibleCrewManager().show();
  });
};

const onClickTeamTab = () => {
  const $teamTab = document.getElementById("team-tab");

  $teamTab.addEventListener("click", () => {
    hideAllManager();
    new VisibleTeamManager().show();
  });
};

const addOnClickTabButtonEvents = () => {
  onClickCrewTab();
  onClickTeamTab();
};

export { addOnClickTabButtonEvents };
