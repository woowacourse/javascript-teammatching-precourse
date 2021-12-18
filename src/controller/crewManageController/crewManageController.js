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
    // this.view.$frontendCourseRadio.addEventListener('checked', this.handleSelectCourse.bind(this));
    this.view.$$courseRadio.forEach((element) =>
      element.addEventListener('change', this.handleSelectCourse.bind(this))
    );
  }

  handleSelectCourse(e) {
    e.preventDefault();

    const course = $('input[name="course"]:checked').value;
    console.log(course);

    if (course === 'backend') {
      this.view.renderCrewManage(this.model.backCrews, STRING.BACK);
    } else {
      this.view.renderCrewManage(this.model.frontCrews, STRING.FRONT);
    }

    this.view.selectCrewManageDOM();
    this.attachCrewManageEvents();
  }

  attachCrewManageEvents() {
    this.view.$addCrewButton.addEventListener('click', this.handleAddCrew.bind(this));
    // this.view.$$deleteCrewButton.forEach((element) => {
    //   element.addEventListener('click', this.handleDeleteCrew.bind(this));
    // });
  }

  handleAddCrew(e) {
    e.preventDefault();
    const crewName = this.view.$crewNameInput.value;
    const course = $('input[name="course"]:checked').value;
    if (isValidCrewName(crewName, course, this.model)) {
      this.model.addCrew(crewName, course);
      if (course === 'backend') {
        this.view.renderCrewTable(this.model.backCrews);
      } else {
        this.view.renderCrewTable(this.model.frontCrews);
      }
      return true;
    }
    return showError();
  }

  // handleDeleteCrew(e) {
  //   e.preventDefault();

  //   const closestTR = e.target.closest('tr');
  //   const targetIdx = closestTR.children[0].innerText;

  //   this.model.deleteCrew(targetIdx);
  // }
}

// 여러 테이블 리스트 있는데 거기서 하나 고를때

//  const closestTR = e.target.closest(STRING.TR);
// this.view.$$purchaseButton.forEach((element) => {
//   element.addEventListener('click', this.handlePurchase.bind(this));
// });
