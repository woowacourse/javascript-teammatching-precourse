import { $ } from '../dom/dom.js';
import renderTeamMatching from '../views/renderTeamMatching.js';

export default function handleRematchEvent(courseName, missionName) {
  $('#rematch-team-button').addEventListener('click', () => {
    renderTeamMatching(courseName, missionName);
  });
}
