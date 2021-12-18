import { $ } from '../utils/dom.js';
import { createCourseAndMissionSelectSection } from './templates/index.js';

import { SELECTOR } from '../constants.js';

class TeamMatchingManageView {
  render() {
    $(`#${SELECTOR.tabContentMain}`).innerHTML = createCourseAndMissionSelectSection();
  }
}

export default TeamMatchingManageView;
