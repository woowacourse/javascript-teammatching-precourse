import Component from '../core/Component.js';
import navigator from '../store/Navigator.js';
import { TAB } from '../constant/data.js';

export default class TabCrewManage extends Component {
  init() {
    navigator.add(this);
  }

  template() {
    const { focusedTab } = navigator.getValue();
    return `
      <div ${focusedTab === TAB.CREW ? '' : 'hidden'}>
        여기는 크루관리 탭!
      </div>
    `;
  }
}
