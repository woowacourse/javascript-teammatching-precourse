import CrewManager from '../CrewManager.js';
import attachMainEvent from '../dom/attachMainEvent.js';
import attachMainMenuEvent from '../dom/attachMainMenuEvent.js';
import printHeader from '../dom/printHeader.js';
import printMain from '../dom/printMain.js';
import TeamMatchManager from '../TeamMatchManager.js';

const initialize = () => {
  const crewManager = new CrewManager();
  const teamMatchManager = new TeamMatchManager();

  console.log(teamMatchManager);
  printHeader();
  printMain();
  attachMainMenuEvent();
  attachMainEvent(crewManager);
};

export default initialize;
