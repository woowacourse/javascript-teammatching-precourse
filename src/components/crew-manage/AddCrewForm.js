import {
  ELEMENT_SELECTOR,
  FRONTEND_COURSE,
  FRONTEND,
  BACKEND,
  VALIDATION_MESSAGES,
  MAX_NAME_LENGTH,
} from '../../constants/index.js';
import { $, getCourseNameById, getTrimedInputValues } from '../../utils/index.js';
import { isEmptyString } from '../../utils/validations.js';
import Component from '../../abstracts/component.js';
import Store from '../../flux/store.js';
import { addCrewTemplate } from '../../templates/crew-manage/addCrewTemplate.js';
import { addCrewAction } from '../../reducers/crewManageReducer.js';

class AddCrewForm extends Component {
  static template = () => {
    const { activeCourseId } = Store.instance.getState().crewManage;
    const courseName = getCourseNameById(activeCourseId);
    return addCrewTemplate(courseName);
  };

  registerEventListeners() {
    const { ADD_CREW_BUTTON } = ELEMENT_SELECTOR.IDS.CREW_MANAGE;
    $(`#${ADD_CREW_BUTTON}`).addEventListener('click', (e) => this.handleClickAddCrewButton(e));
  }

  handleClickAddCrewButton(e) {
    const { ADD_CREW_INPUT } = ELEMENT_SELECTOR.IDS.CREW_MANAGE;
    const [name] = getTrimedInputValues([$(`#${ADD_CREW_INPUT}`)]);
    const { activeCourseId } = Store.instance.getState().crewManage;
    const course = activeCourseId === FRONTEND_COURSE ? FRONTEND : BACKEND;
    const { isValid, message } = this.isValidCrew(course, name);
    if (!isValid) {
      alert(message);
      return;
    }
    Store.instance.dispatch(addCrewAction({ course, name }));
  }

  isValidCrew(course, name) {
    if (isEmptyString(name) || name.length > MAX_NAME_LENGTH) {
      return { isValid: false, message: VALIDATION_MESSAGES.CREW_MANAGE.NAME };
    }
    const { crews } = Store.instance.getState().crewManage;
    if (this.isDuplicatedCrew(crews, course, name)) {
      return { isValid: false, message: VALIDATION_MESSAGES.CREW_MANAGE.DUPLICATED };
    }
    return { isValid: true, message: null };
  }

  isDuplicatedCrew(crews, course, name) {
    return crews.some((crew) => {
      return course === crew.course && name === crew.name;
    });
  }
}

export default AddCrewForm;
