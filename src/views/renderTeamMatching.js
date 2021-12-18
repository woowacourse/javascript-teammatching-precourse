import { FROINTEND_STORAGE_NAME, NAME_KEY } from '../constants/constants.js';
import { GAMEOBJ } from '../constants/gameConstants.js';
import { $ } from '../dom/dom.js';
import store from '../store/store.js';

function getCourseTitle(courseName) {
  if (courseName === FROINTEND_STORAGE_NAME) {
    return '프론트엔드';
  } else {
    return '백엔드';
  }
}

function getMissionTitle(missionName) {
  return GAMEOBJ[missionName];
}

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
            <input id="team-number-count-input"type="number" />
            <button id="match-team-button">팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul id="team-match-result"></ul>
      </div>
  `;
  $('#team-match-result').innerHTML = renderTeamMember(courseName);
}
