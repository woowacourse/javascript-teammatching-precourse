import Component from '../core/Component.js';
import SelectionCourse from './TabCrewManage/SelectionCourse.js';
import navigator from '../store/Navigator.js';
import { ID } from '../constant/selector.js';
import { TAB } from '../constant/data.js';

export default class TabCrewManage extends Component {
  init() {
    navigator.add(this);
  }

  mount() {
    this.selectionCourse = new SelectionCourse(this.$element.querySelector(`#${ID.SECTION_SELECTION_COURSE}`));
  }

  template() {
    const { focusedTab } = navigator.getValue();
    return `
      <div ${focusedTab === TAB.CREW ? '' : 'hidden'}>
        <section id="${ID.SECTION_SELECTION_COURSE}"></section>
      </div>
    `;
  }
}
