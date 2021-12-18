import { $ } from '../utils/dom.js';
import {
  createCourseAndMissionSelectSection,
  createTeamMemberCountForm,
  createTeamMatchingResult,
} from './templates/index.js';

import { SELECTOR } from '../constants.js';

class TeamMatchingManageView {
  render() {
    $(`#${SELECTOR.tabContentMain}`).innerHTML = createCourseAndMissionSelectSection();
  }

  renderTeamMemberCountForm(course, mission, crewMembers) {
    $(`#${SELECTOR.teamMatchingContainer}`).innerHTML = createTeamMemberCountForm(
      course,
      mission,
      crewMembers,
    );
  }

  renderTeamMatchingResult(course, mission, results) {
    $(`#${SELECTOR.teamMatchingContainer}`).innerHTML = createTeamMatchingResult(
      course,
      mission,
      results,
    );
  }
}

export default TeamMatchingManageView;
