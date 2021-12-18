import $ from '../util/$.js';
import {
  TEAM_INPUT_ID,
  SECTION_ID,
  TBODY_ID,
  CREW_TABLE_INDEX,
} from '../constant/constant.js';
import { showNextSection } from './manageCrewHanlder.js';

function courseMissionHandler() {
  const $button = $(`#${TEAM_INPUT_ID.CHECK_BUTTON}`);

  $button.addEventListener('click', (event) => {
    event.preventDefault();
    showNextSection(SECTION_ID.TEAM_MATCH);
  });
}

export default function manageTeamHandler(manager) {
  courseMissionHandler();
}
