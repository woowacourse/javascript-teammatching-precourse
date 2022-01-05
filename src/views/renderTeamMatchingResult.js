import { $ } from '../dom/dom.js';
import getCourseTitle from '../modules/getCourseTitle.js';
import getMissionTitle from '../modules/getMissionTitle.js';

function renderTeamList(crewList) {
  crewList.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.join(',');
    $('#team-match-result').appendChild(li);
  });
}

export default function renderTeamMatchResult(
  courseName,
  missionName,
  crewList
) {
  $('.team-matching-container').innerHTML = `
  <h3>${getCourseTitle(courseName)} ${getMissionTitle(missionName)} 팀 조회
  <p>팀이 매칭되었습니다.</p>
  <ul id="team-match-result">
  </ul>
  <p>
    팀을 재매칭 하시겠습니까?
    <button id="rematch-team-button">재매칭</button>
  </p>
  `;
  renderTeamList(crewList);
}
