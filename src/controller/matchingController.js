import { beCrewList, feCrewList } from '../model/store.js';
import { $, showMatchingInput } from '../utils/dom.js';
import { shuffleArray } from '../utils/shuffleArray.js';
import MatchingValidator from '../validator/matchingValidator.js';

class MatchingController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  matchTeam() {
    const memberCount = this.view.getMemberCountInput();
    if (MatchingValidator.isInvalidMemberCount(memberCount)) {
      return;
    }
    const selectedCourse = $('#course-select').options[$('#course-select').selectedIndex].innerText;
    const crewList = selectedCourse === '프론트엔드' ? feCrewList : beCrewList;
  }

  bindEvent() {
    $('#show-team-matcher-button').addEventListener('click', () => {
      showMatchingInput();
      this.view.renderMatchingInput();
    });
    $('#match-team-button').addEventListener('click', this.matchTeam.bind(this));
  }
}

export default MatchingController;
