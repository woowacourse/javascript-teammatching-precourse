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

function removeCurrentSection(dom) {
  $(`#${dom}`).style.display = 'none';
}

function onMatch(manager) {
  const number = $(`#${TEAM_INPUT_ID.TEAM_NUMBER_INPUT}`).value;
  const team = {
    course: $(`#${TEAM_INPUT_ID.COURSE}`).value,
    mission: $(`#${TEAM_INPUT_ID.MISSION}`).value,
  };
  manager.matchTeam(team, number);
  removeCurrentSection(SECTION_ID.TEAM_MATCH);
  showNextSection(SECTION_ID.TEAM_MATCHED);
}

function memberNumberHander(manager) {
  const $button = $(`#${TEAM_INPUT_ID.MATCH_BUTTON}`);

  $button.addEventListener('click', (event) => {
    event.preventDefault();
    onMatch(manager);
  });
}

export default function manageTeamHandler(manager) {
  courseMissionHandler();
  memberNumberHander(manager);
}
