import { $ } from '../dom/dom.js';
import checkValidCrewNumberInput from './checkValidCrewNumberInput.js';
import matchCrewTeam from './matchCrewTeam.js';
export default function handleMatchTeamEvent(courseName, missionName) {
  $('#match-team-button').addEventListener('click', () => {
    const teamNum = $('#team-member-count-input').value;
    if (checkValidCrewNumberInput(teamNum, courseName)) {
      matchCrewTeam(courseName, teamNum);
    }
  });
}
