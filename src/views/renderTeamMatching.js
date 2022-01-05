import { NAME_KEY } from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import store from '../store/store.js';
import getCourseTitle from '../modules/getCourseTitle.js';
import getMissionTitle from '../modules/getMissionTitle.js';
function renderTeamMember(courseName) {
  const storage = store.getLocalStorage(courseName);
  if (storage) {
    return storage
      .map((item) => {
        return `<li>${item[NAME_KEY]}</li>`;
      })
      .join('');
  } else {
    return '';
  }
}

export default function renderTeamMatching(courseName, missionName) {
  $('.team-matching-container').innerHTML = `
  <h3>${getCourseTitle(courseName)} ${getMissionTitle(
    missionName
  )} 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input id="team-member-count-input"type="number" />
            <button type="button" id="match-team-button">팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul id="crew-list"></ul>
      </div>
  `;
  $('#crew-list').innerHTML = renderTeamMember(courseName);
}
