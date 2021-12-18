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
    this.$crewManageSection = $('#crew-manage-section');
  }

  renderCrewManage(crews, course) {
    this.$crewManageSection.innerHTML = crewManageTemplate(crews, course);
  }

  selectCrewManageDOM() {
    this.$crewNameInput = $('#crew-name-input');
    this.$addCrewButton = $('#add-crew-buttton');
    this.$tbody = $('tbody');
    this.$$deleteCrewButton = $$('#delete-crew-button');
  }

  selectDeleteCrewButtonDOM() {
    this.$$deleteCrewButton = $$('#delete-crew-button');
  }

  renderCrewTable(crews) {
    this.$tbody.innerHTML = crewTableTemplate(crews);
  }
}
