import { addCrewManager } from "./views/crewManager/addCrewManager.js";
import { showHeader } from "./views/header/showHeader.js";
import { addTeamManager } from "./views/teamManager/addTeamManager.js";

import Tab from "./controllers/tabs/tab.js";
import CrewManager from "./controllers/crewManager/crewManager.js";

class TeamMatching {
  constructor() {
    showHeader();
    addCrewManager();
    addTeamManager();
    new Tab();
    new CrewManager();
  }
}

new TeamMatching();
