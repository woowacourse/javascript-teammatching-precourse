import Component from '../core/Component.js';
import SelectionCourse from './TabCrewManage/SelectionCourse.js';
import NameForm from './TabCrewManage/NameForm.js';
import CrewTable from './TabCrewManage/CrewTable.js';
import navigator from '../store/Navigator.js';
import { ID } from '../constant/selector.js';
import { TAB } from '../constant/data.js';

export default class TabCrewManage extends Component {
  init() {
    navigator.add(this);
  }

  mount() {
    this.selectionCourse = new SelectionCourse(this.$element.querySelector(`#${ID.SECTION_SELECTION_COURSE}`));
    this.nameForm = new NameForm(this.$element.querySelector(`#${ID.SECTION_NAME_FORM}`));
    this.crewTable = new CrewTable(this.$element.querySelector(`#${ID.SECTION_CREW_TABLE}`));
  }

  template() {
    const { focusedTab } = navigator.getValue();
    return `
      <div ${focusedTab === TAB.CREW ? '' : 'hidden'}>
        <section id="${ID.SECTION_SELECTION_COURSE}"></section>
        <section id="${ID.SECTION_NAME_FORM}"></section>
        <section id="${ID.SECTION_CREW_TABLE}"></section>
      </div>
    `;
  }
}
