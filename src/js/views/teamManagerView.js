import $ from '../utils/dom.js';
import store from '../utils/store.js';

export const renderExistTeam = (course, mission) => {
  $('#team-result-wrapper').innerHTML = `
    <h3>${course} ${mission} 조회</h3>
    <p>팀이 매칭되었습니다.</p>
    <ul>
    </ul>
    <p>
      팀을 재매칭 하시겠습니까?
      <button id="rematch-team-button">재매칭</button>
    </p>
    `;
};

const renderFrontMatchTeam = mission => {
  $('#team-result-wrapper').innerHTML = `
  <h3>프론트엔드 ${mission} 미션의 팀 매칭</h3>
  <div>
    <div>
      <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
      <form>
        <label>1팀당 인원 수</label>
        <input id="team-member-count-input" type="number" />
        <button id="match-team-button">팀 매칭</button>
      </form>
    </div>
    <h4>크루 목록</h4>
    <ul id="team-match-result">
    </ul>
  </div>
  `;
  const listTemplate = store
    .getLocalStorage('FrontCrew')
    .map(crew => {
      return `<li>${crew.name}</li>`;
    })
    .join('');

  $('#team-match-result').innerHTML = listTemplate;
};

const renderBackMatchTeam = mission => {
  $('#team-result-wrapper').innerHTML = `
  <h3>백엔드 ${mission}의 팀 매칭</h3>
  <div>
    <div>
      <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
      <form>
        <label>1팀당 인원 수</label>
        <input id="team-member-count-input" type="number" />
        <button id="match-team-button">팀 매칭</button>
      </form>
    </div>
    <h4>크루 목록</h4>
    <ul id="team-match-result">
    </ul>
  </div>
  `;
  const listTemplate = store
    .getLocalStorage('BackCrew')
    .map(crew => {
      return `<li>${crew.name}</li>`;
    })
    .join('');

  $('#team-match-result').innerHTML = listTemplate;
};

export const renderMatchTeam = (course, mission) => {
  if (course === 'frontend') {
    renderFrontMatchTeam(mission);
  }
  if (course === 'backend') {
    renderBackMatchTeam(mission);
  }
};

export const resetMeberCountInput = () => {
  $('#team-member-count-input').value = '';
};
