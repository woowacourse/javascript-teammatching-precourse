import CrewManageView from '../view/CrewManage.js';
import CrewManageModel from '../model/CrewManage.js';
import {
  validateMemberNameNull,
  validateMemberNameUnique,
  validateMemberNameUnderFiveLetter,
} from './validators/CrewMember.js';
import { $ } from '../utils/dom.js';

import { SELECTOR, FRONT_END, BACK_END, FRONT_END_COURSE, BACK_END_COURSE } from '../constants.js';

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
      this.$crewManageView.renderCrewManageTable(
        FRONT_END,
        this.$crewManageModel.getFrontEndMember(),
      );
    } else if (id === SELECTOR.backendCourseRadioInputId) {
      this.$crewManageModel.setCrewCourse(SELECTOR.backendCourseRadioInputId);
      this.$crewManageView.renderCrewManageForm(BACK_END);
      this.$crewManageView.renderCrewManageTable(
        BACK_END,
        this.$crewManageModel.getBackEndMember(),
      );
    } else if (id === SELECTOR.addCrewButttonId) {
      this.onClickAddCrewButton(event);
    }
  }

  onClickAddCrewButton(event) {
    event.preventDefault();

    const crewName = $(`#${SELECTOR.crewNameInputId}`).value;
    const currentCourse = this.$crewManageModel.getCrewCourse();

    if (!this.validateCrewName(crewName)) return;

    if (currentCourse === FRONT_END_COURSE) {
      const frontendMembers = this.$crewManageModel.getFrontEndMember();
      const addedFrontendMembers = [...frontendMembers, { name: crewName }];
      this.$crewManageModel.setFrontEndMember(addedFrontendMembers);
      this.$crewManageView.renderCrewManageTable(FRONT_END, addedFrontendMembers);
    } else if (currentCourse === BACK_END_COURSE) {
      const backendMembers = this.$crewManageModel.getBackEndMember();
      const addedBackendMembers = [...backendMembers, { name: crewName }];
      this.$crewManageModel.setBackEndMember(addedBackendMembers);
      this.$crewManageView.renderCrewManageTable(BACK_END, addedBackendMembers);
    }

    $(`#${SELECTOR.crewNameInputId}`).value = null;
  }

  validateCrewName(name) {
    return (
      validateMemberNameNull(name) &&
      validateMemberNameUnique(name, this.$crewManageModel.getFrontEndMember()) &&
      validateMemberNameUnique(name, this.$crewManageModel.getBackEndMember()) &&
      validateMemberNameUnderFiveLetter(name)
    );
  }
}

export default CrewManageController;
