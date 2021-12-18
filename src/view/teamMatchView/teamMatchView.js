import { $ } from '../../utils/DOMHelper.js';
import { selectCourseMissionTemplate } from '../../utils/template.js';

export default class TeamMatchView {
  init() {
    this.$main = $('main');
  }

  renderSelectCourseMission() {
    this.$main.innerHTML = selectCourseMissionTemplate();
  }
}
