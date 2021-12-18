import { CREW_TAB, EMPTY, TEAM_TAB, TEAM_MISSION } from '../../constants/index.js';
import CrewManage from './CrewManage.js';
import TeamManage from './TeamManage.js';

const Content = component => {
  switch (component) {
    case CREW_TAB:
      return CrewManage();
    case TEAM_TAB:
      return TeamManage(TEAM_MISSION);
    default:
      return EMPTY;
  }
};

export default Content;
