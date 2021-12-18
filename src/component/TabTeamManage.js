import Component from '../core/Component.js';
import navigator from '../store/Navigator.js';
import { TAB } from '../constant/data.js';

export default class TabTeamManage extends Component {
  init() {
    navigator.add(this);
  }

  template() {
    const { focusedTab } = navigator.getValue();
    return `
      <div ${focusedTab === TAB.TEAM ? '' : 'hidden'}>
        여기는 팀 관리 탭!
      </div>
    `;
  }
}
