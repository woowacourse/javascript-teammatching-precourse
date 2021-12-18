import { $ } from '../dom/dom.js';
import checkValidCrewNumberInput from './checkValidCrewNumberInput.js';
export default function handleMatchTeamEvent() {
  $('#match-team-button').addEventListener('click', () => {
    const teamNum = $('#team-member-count-input').value;
    if (checkValidCrewNumberInput(teamNum)) {
    }
  });
}
