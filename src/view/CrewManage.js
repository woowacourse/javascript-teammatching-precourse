import { $ } from '../utils/dom.js';
import {
  createCourseSelectSection,
  createCrewCreateForm,
  createCrewTable,
} from './templates/index.js';

import { SELECTOR } from '../constants.js';

class CrewManageTabView {
  render() {
    $(`#${SELECTOR.tabContentMain}`).innerHTML = createCourseSelectSection();
  }

  renderCrewManageForm(course) {
    $(`#${SELECTOR.crewManageFormContainer}`).innerHTML = createCrewCreateForm(course);
  }

  renderCrewManageTable(course, crewMembers) {
    $(`#${SELECTOR.crewTableContainer}`).innerHTML = createCrewTable(course, crewMembers);
  }
}

export default CrewManageTabView;
