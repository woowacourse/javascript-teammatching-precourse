import { $, $$ } from '../../utils/DOMHelper.js';
import {
  crewManageTemplate,
  crewTableTemplate,
  selectCourseTemplate,
} from '../../utils/template.js';

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

  renderCrewManage(crews, course) {
    this.$main.insertAdjacentHTML('beforeend', crewManageTemplate(crews, course));
  }

  selectCrewManageDOM() {
    this.$crewNameInput = $('#crew-name-input');
    this.$addCrewButton = $('#add-crew-button');
    this.$tbody = $('tbody');
    this.$$deleteCrewButton = $$('#delete-crew-button');
  }

  renderCrewTable(crews) {
    this.$tbody.innerHTML = crewTableTemplate(crews);
  }
}
