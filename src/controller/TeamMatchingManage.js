import TeamMatchingView from '../view/TeamMatchingManage.js';
import CrewManageModel from '../model/CrewManage.js';
import { $ } from '../utils/dom.js';
import { changeMissionNameToKorean } from '../utils/index.js';

import {
  SELECTOR,
  FRONT_END,
  BACK_END,
  FRONT_END_COURSE,
  BACK_END_COURSE,
  OPTION,
} from '../constants.js';

class TeamMatchingManageController {
  constructor() {
    this.$teamMatchinManageView = new TeamMatchingView();
    this.$crewManageModel = new CrewManageModel();

    this.initEventListeners();
  }

  initEventListeners() {
    $(`#${SELECTOR.tabContentMain}`).addEventListener(
      'click',
      this.onClickTeamMatchingManageContent.bind(this),
    );
  }

  onClickTeamMatchingManageContent(event) {
    const { id } = event.target;

    if (id === SELECTOR.showTeamMatcherButtonId) {
      this.onClickTeamMatcherButton(event);
    }
  }

  onClickTeamMatcherButton(event) {
    event.preventDefault();

    const courseName = $(`#${SELECTOR.courseSelectId}`).value;
    const missionName = changeMissionNameToKorean($(`#${SELECTOR.missionSelectId}`).value);

    if (courseName === OPTION.frontend) {
      this.$teamMatchinManageView.renderTeamMemberCountForm(
        FRONT_END,
        missionName,
        this.$crewManageModel.getFrontEndMember(),
      );
    } else if (courseName === OPTION.backend) {
      this.$teamMatchinManageView.renderTeamMemberCountForm(
        BACK_END,
        missionName,
        this.$crewManageModel.getBackEndMember(),
      );
    }
  }
}

export default TeamMatchingManageController;
