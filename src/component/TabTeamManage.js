import Component from '../core/Component.js';
import SelectionMission from './TabTeamManage/SelectionMission.js';
import navigator from '../store/Navigator.js';
import { TAB } from '../constant/data.js';
import { ID } from '../constant/selector.js';

export default class TabTeamManage extends Component {
  init() {
    navigator.add(this);
  }

  mount() {
    this.selectionMission = new SelectionMission(this.$element.querySelector(`#${ID.SECTION_SELECTION_MISSION}`));
  }
  
  template() {
    const { focusedTab } = navigator.getValue();
    return `
      <div ${focusedTab === null || focusedTab !== TAB.TEAM ? 'hidden' : ''}>
        <section id="${ID.SECTION_SELECTION_MISSION}"></section>
      </div>
    `;
  }
}
