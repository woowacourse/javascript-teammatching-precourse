import CrewManageView from '../view/CrewManage.js';
import CrewManageModel from '../model/CrewManage.js';
import { $ } from '../utils/dom.js';

import { SELECTOR, FRONT_END, BACK_END } from '../constants.js';

class CrewManageController {
  constructor() {
    this.$crewManageModel = new CrewManageModel();
    this.$crewManageView = new CrewManageView();

    this.initEventListeners();
  }

  initEventListeners() {
    $(`#${SELECTOR.tabContentMain}`).addEventListener(
      'click',
      this.onClickCrewManageContent.bind(this),
    );
  }

  onClickCrewManageContent(event) {
    const { id } = event.target;

    if (id === SELECTOR.frontendCourseRadioInputId) {
      this.$crewManageModel.setCrewCourse(SELECTOR.frontendCourseRadioInputId);
      this.$crewManageView.renderCrewManageForm(FRONT_END);
      this.$crewManageView.renderCrewManageTable(FRONT_END);
    } else if (id === SELECTOR.backendCourseRadioInputId) {
      this.$crewManageModel.setCrewCourse(SELECTOR.backendCourseRadioInputId);
      this.$crewManageView.renderCrewManageForm(BACK_END);
      this.$crewManageView.renderCrewManageTable(BACK_END);
    }
  }
}

export default CrewManageController;
