import { EMPTY, DOM } from '../../constants/index.js';
import CrewManage from './CrewManage.js';
import TeamManage from './TeamManage.js';

const Content = ({ component, matched, nonMatched, checked, mission, data, teams }) => {
  switch (component) {
    case DOM.CREW_TAB:
      return CrewManage({ checked, data });
    case DOM.TEAM_TAB: {
      return TeamManage({
        matched,
        nonMatched,
        checked,
        mission,
        data,
        teams: teams[`${checked}${mission}`] || [],
      });
    }
    default:
      return EMPTY;
  }
};

export default Content;
