import CrewManageView from '../../view/crewManageView/crewManageView.js';
import { $ } from '../../utils/DOMHelper.js';

export default class CrewManageController {
  constructor(model) {
    this.model = model;
    this.view = new CrewManageView();
  }

  init() {
    this.view.init();
    this.view.renderSelectCourse();
    this.view.selectRadioDOM();

    this.attachEvents();
  }

  attachEvents() {
    // this.view.$frontendCourseRadio.addEventListener('checked', this.handleSelectCourse.bind(this));
    this.view.$$courseRadio.forEach((element) =>
      element.addEventListener('change', this.handleSelectCourse.bind(this))
    );
  }

  handleSelectCourse(e) {
    e.preventDefault();

    this.view.renderCrewManage();
    // const checkedValue = $('input[name="course"]:checked').value;

    // console.log(checkedValue);
  }
}
