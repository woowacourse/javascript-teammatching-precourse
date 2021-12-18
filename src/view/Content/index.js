import { EMPTY, DOM } from '../../constants/index.js';
import CrewManage from './CrewManage.js';
import TeamManage from './TeamManage.js';

const Content = ({ component, checked }) => {
  switch (component) {
    case DOM.CREW_TAB:
      return CrewManage(checked);
    case DOM.TEAM_TAB:
      return TeamManage();
    default:
      return EMPTY;
  }
};

export default Content;
