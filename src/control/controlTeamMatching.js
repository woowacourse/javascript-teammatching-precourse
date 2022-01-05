import { $ } from '../dom/dom.js';
import checkValidCrewNumberInput from '../modules/checkValidCrewNumberInput.js';
import getCourseAndMissionSelect from '../modules/getCourseAndMissionSelect.js';
import renderCourseSelctor from '../views/renderCourseSelector.js';
import renderTeamMatching from '../views/renderTeamMatching.js';
import handleMatchTeamEvent from '../modules/handleMatchTeamEvent.js';

export default function controlTeamMatching() {
  renderCourseSelctor();
  $('#show-team-matcher-button').addEventListener('click', () => {
    const teamInfo = getCourseAndMissionSelect();
    const courseName = teamInfo[0];
    const missionName = teamInfo[1];
    renderTeamMatching(courseName, missionName);
    handleMatchTeamEvent(courseName, missionName);
  });
}
