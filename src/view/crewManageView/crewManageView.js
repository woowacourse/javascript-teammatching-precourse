import { $, $$ } from '../../utils/DOMHelper.js';
import { crewManageTemplate, selectCourseTemplate } from '../../utils/template.js';

export default class CrewManageView {
  init() {
    this.$main = $('main');
  }

  renderSelectCourse() {
    this.$main.innerHTML = selectCourseTemplate();
  }

  selectRadioDOM() {
    this.$$courseRadio = $$('input[name="course"]');
    this.$frontendCourseRadio = $('#frontend-course');
    this.$backendCourseRadio = $('#backend-course');
  }

  renderCrewManage() {
    this.$main.insertAdjacentHTML('beforeend', crewManageTemplate());
  }

  selectCrewManageDOM() {
    this.$crewNameInput = $('#crew-name-input');
    this.$addCrewButton = $('#add-crew-button');
    console.log(this.$addCrewButton, this.$crewNameInput);
  }
}
