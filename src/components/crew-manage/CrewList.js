import { ELEMENT_SELECTOR, ELEMENT_DATA_ATTRIBUTES } from '../../constants/index.js';
import Store from '../../flux/store.js';
import Component from '../../abstracts/component.js';
import { crewListTemplate } from '../../templates/crew-manage/crewListTemplate.js';
import { $, getCourseNameById, getCourseById } from '../../utils/index.js';
import { removeCrewAction } from '../../reducers/crewManageReducer.js';

class CrewList extends Component {
  static template = () => {
    const { crews, activeCourseId } = Store.instance.getState().crewManage;
    const courseName = getCourseNameById(activeCourseId);
    const course = getCourseById(activeCourseId);
    return crewListTemplate(crews, courseName, course);
  };

  registerEventListeners() {
    const { CREW_LIST_TABLE } = ELEMENT_SELECTOR.IDS.CREW_MANAGE;
    $(`#${CREW_LIST_TABLE}`).addEventListener('click', (e) => this.handleClickRemoveCrewButton(e));
  }

  handleClickRemoveCrewButton(e) {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    const { CREW_NAME, CREW_COURSE } = ELEMENT_DATA_ATTRIBUTES.CREW_MANAGE;
    const $button = e.target;
    const name = $button.getAttribute(`${CREW_NAME}`);
    const course = $button.getAttribute(`${CREW_COURSE}`);
    Store.instance.dispatch(removeCrewAction({ name, course }));
  }
}

export default CrewList;
