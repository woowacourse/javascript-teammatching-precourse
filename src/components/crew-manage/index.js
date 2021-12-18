import { ELEMENT_SELECTOR } from '../../constants/index.js';
import { $ } from '../../utils/index.js';
import Component from '../../abstracts/component.js';
import CourseSelectForm from './CourseSelectForm.js';

class CrewManage extends Component {
  static template = () => {
    const { CREW_MANAGE } = ELEMENT_SELECTOR.IDS;
    return `<div id="${CREW_MANAGE.PANE}"></div>`;
  };

  mountChildren() {
    this.courseSelect = new CourseSelectForm(this.$view).mount();
  }

  unmountChildren() {
    this.courseSelect.unmount();
  }

  bindingElements() {
    const { CREW_MANAGE } = ELEMENT_SELECTOR.IDS;
    this.$view = $(`#${CREW_MANAGE.PANE}`);
  }
}

export default CrewManage;
