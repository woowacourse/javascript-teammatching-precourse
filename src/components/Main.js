import Component from '../core/Component.js';
import { MENU } from '../utils/constants.js';
import { newElement, replaceFirstChild } from '../utils/dom.js';
import CrewManagement from './CrewManagement/index.js';
import TeamManagement from './TeamManagement/index.js';

const renderByStatus = {
  [MENU.CREW_MANAGE]: new CrewManagement(newElement('<div id="contents"/>')),
  [MENU.TEAM_MANAGE]: new TeamManagement(newElement('<div id="contents"/>')),
};

export default class Main extends Component {
  render() {
    replaceFirstChild(
      this.$container,
      renderByStatus[this.props.selectedMenu].returnRoot()
    );
  }
}
