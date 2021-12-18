import VisibleCrewManager from "../crewManager/visibleCrewManager.js";
import VisibleTeamManager from "../teamManager/visibleTeamManager.js";

const hideAllManager = () => {
  new VisibleCrewManager().hide();
  new VisibleTeamManager().hide();
};

export { hideAllManager };
