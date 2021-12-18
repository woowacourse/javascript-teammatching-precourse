import CrewManageView from '../../view/crewManageView/crewManageView.js';
import { $ } from '../../utils/DOMHelper.js';
import { isValidCrewName } from '../../utils/validator.js';
import { showError } from '../../utils/error.js';

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

    this.view.renderCrewManage(this.model.crews);
    this.view.selectCrewManageDOM();
    this.attachCrewManageEvents();
    // const checkedValue = $('input[name="course"]:checked').value;

    // console.log(checkedValue);
  }

  attachCrewManageEvents() {
    this.view.$addCrewButton.addEventListener('click', this.handleAddCrew.bind(this));
  }

  handleAddCrew(e) {
    e.preventDefault();

    const crewName = this.view.$crewNameInput.value;

    if (isValidCrewName(crewName, this.model)) {
      this.model.addCrew(crewName);
      console.log(this.model);
      return console.log(crewName);
    }

    return showError();
  }
}

// 여러 테이블 리스트 있는데 거기서 하나 고를때

//  const closestTR = e.target.closest(STRING.TR);
// this.view.$$purchaseButton.forEach((element) => {
//   element.addEventListener('click', this.handlePurchase.bind(this));
// });
