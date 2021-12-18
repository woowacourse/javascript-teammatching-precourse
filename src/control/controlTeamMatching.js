import { $ } from '../dom/dom.js';
import getCourseAndMissionSelect from '../modules/getCourseAndMissionSelect.js';
import renderCourseSelctor from '../views/renderCourseSelector.js';

export default function controlTeamMatching() {
  renderCourseSelctor();
  $('#show-team-matcher-button').addEventListener('click', () => {
    const teamInfo = getCourseAndMissionSelect();
    const courseName = teamInfo[0];
    const missionName = teamInfo[1];
  });
}
