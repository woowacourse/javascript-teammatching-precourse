import { $ } from '../dom/dom.js';

export default function getCourseAndMissionSelect() {
  const courseName = $('#course-select').value;
  const missionName = $('#mission-select').value;
  return [courseName, missionName];
}
