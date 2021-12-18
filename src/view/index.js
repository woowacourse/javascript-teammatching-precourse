import { $ } from '../utils/dom.js';
import { createBoardHeader } from './templates/index.js';

import { SELECTOR } from '../constants.js';

class TeamMatchingView {
  constructor() {
    this.initializeView();
  }

  initializeView() {
    $(`#${SELECTOR.teamMatchingAppId}`).innerHTML = createBoardHeader();
  }
}

export default TeamMatchingView;
