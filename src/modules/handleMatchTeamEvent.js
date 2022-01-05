import { $ } from '../dom/dom.js';
import checkValidCrewNumberInput from './checkValidCrewNumberInput.js';
import matchCrewTeam from './matchCrewTeam.js';
import renderTeamMatchResult from '../views/renderTeamMatchingResult.js';
import handleRematchEvent from './handleRematchEvent.js';

export default function handleMatchTeamEvent(courseName, missionName) {
  $('#match-team-button').addEventListener('click', () => {
    const teamNum = $('#team-member-count-input').value;
    if (checkValidCrewNumberInput(teamNum, courseName)) {
      renderTeamMatchResult(
        courseName,
        missionName,
        matchCrewTeam(courseName, teamNum)
      );
      handleRematchEvent(courseName, missionName);
    }
  });
}
