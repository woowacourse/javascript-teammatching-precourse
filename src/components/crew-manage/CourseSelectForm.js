import { ELEMENT_SELECTOR } from '../../constants/index.js';
import { $ } from '../../utils/index.js';
import Store from '../../flux/store.js';
import Component from '../../abstracts/component.js';
import { courseSelectTemplate } from '../../templates/crew-manage/courseSelectTemplate.js';
import { updateActiveCourseAction } from '../../reducers/crewManageReducer.js';

class CourseSelectForm extends Component {
  static template = () => {
    const { activeCourseId } = Store.instance.getState().crewManage;
    return courseSelectTemplate(activeCourseId);
  };

  registerEventListeners() {
    const { COURSE_SELECT } = ELEMENT_SELECTOR.IDS.CREW_MANAGE;
    $(`#${COURSE_SELECT} input`).forEach(($input) => {
      $input.addEventListener('click', (e) => this.handleSelectCourse(e));
    });
  }

  handleSelectCourse(e) {
    const $input = e.target;
    const id = $input.getAttribute('id');
    Store.instance.dispatch(updateActiveCourseAction(id));
  }
}

export default CourseSelectForm;
