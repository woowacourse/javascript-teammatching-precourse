import { $ } from '../../utils/DOMHelper.js';
import { selectCourseTemplate } from '../../utils/template.js';

export default class CrewManageView {
  init() {
    this.$main = $('main');
  }

  renderSelectCourse() {
    this.$main.innerHTML = selectCourseTemplate();
  }
}
