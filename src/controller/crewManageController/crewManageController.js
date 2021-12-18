import CrewManageView from '../../view/crewManageView/crewManageView.js';
import { $ } from '../../utils/DOMHelper.js';
import { isValidCrewName } from '../../utils/validator.js';
import { showError } from '../../utils/error.js';
import { STRING } from '../../constants/constants.js';

export default class CrewManageController {
  constructor(model) {
    this.model = model;
    this.view = new CrewManageView();
  }

  init() {
    this.view.init();
    this.view.renderSelectCourse();
    this.view.selectRadioDOM();
    this.attachSelectCourseEvents();
  }

  attachSelectCourseEvents() {
    this.view.$$courseRadio.forEach((element) =>
      element.addEventListener('change', this.handleSelectCourse.bind(this))
    );
  }

  handleSelectCourse(e) {
    e.preventDefault();

    const course = $('input[name="course"]:checked').value;

    if (course === 'backend') {
      this.view.renderCrewManage(this.model.backCrews, STRING.BACK);
    } else {
      this.view.renderCrewManage(this.model.frontCrews, STRING.FRONT);
    }

    this.view.selectCrewManageDOM();
    this.attachCrewManageEvents();
  }

  attachCrewManageEvents() {
    if (this.view.$addCrewButton.getAttribute('listener') !== true) {
      this.view.$addCrewButton.addEventListener('click', this.handleAddCrew.bind(this));
    }

    this.view.$$deleteCrewButton.forEach((element) => {
      if (element.getAttribute('listener') !== true) {
        element.addEventListener('click', this.handleDeleteCrew.bind(this));
      }
    });
  }

  attachCrewManageDeleteEvent() {
    this.view.$$deleteCrewButton.forEach((element) => {
      element.addEventListener('click', this.handleDeleteCrew.bind(this));
    });
  }

  handleAddCrew(e) {
    e.preventDefault();
    const crewName = this.view.$crewNameInput.value;
    const course = $('input[name="course"]:checked').value;
    if (isValidCrewName(crewName, course, this.model)) {
      this.model.addCrew(crewName, course);
      this.renderCrewTableByCourse(course);
      this.view.selectDeleteCrewButtonDOM();
      this.attachCrewManageDeleteEvent();
      return true;
    }
    return showError();
  }

  handleDeleteCrew(e) {
    e.preventDefault();
    const course = $('input[name="course"]:checked').value;
    const isDelete = confirm('삭제하시겠습니까?');
    if (isDelete) {
      const closestTR = e.target.closest('tr');
      const targetIdx = closestTR.children[0].innerText;
      this.model.deleteCrew(targetIdx, course);
    }
    this.renderCrewTableByCourse(course);
    this.view.selectDeleteCrewButtonDOM();
    this.attachCrewManageEvents();
  }

  renderCrewTableByCourse(course) {
    if (course === 'backend') {
      return this.view.renderCrewTable(this.model.backCrews);
    }
    return this.view.renderCrewTable(this.model.frontCrews);
  }
}
