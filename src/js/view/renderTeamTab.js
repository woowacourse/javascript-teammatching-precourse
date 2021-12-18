import { $ } from '../util/dom.js';
import { store } from '../store/store.js';
import { checkcourseCrew } from '../core/manageTeam.js';

export const renderTeamMain = () => {
  if ($('main') !== null) {
    $('main').innerHTML = '';
  }
  const template = () => {
    return `
          <main>
              <section id='choose-course'></section>
              <section id='add-team-form'></section>
              <section id='crew-list'></section>
              <section id='team-list'></section>
          </main>
          `;
  };
  $('#app').innerHTML += template();
};

export const renderSelectCourseAndMission = () => {
  const template = () => {
    return `<h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
        <form id='select-course-and-mission'>
          <select id='course-select'>
            <option value="frontend">프론트엔드</option>
            <option value="backend">백엔드</option>
          </select>
          <select id='mission-select'>
            <option value="baseball">숫자야구게임</option>
            <option value="racingcar">자동차경주</option>
            <option value="lotto">로또</option>
            <option value="shopping-cart">장바구니</option>
            <option value="payments">결제</option>
            <option value="subway">지하철노선도</option>
            <option value="performace">성능개선</option>
            <option value="deploy">배포</option>
          </select>
          <button id='show-team-matcher-button'>확인</button>`;
  };
  $('#choose-course').innerHTML = template();
};

export const renderNotExistTeam = (course, mission) => {
  const template = () => {
    return `<h3>${course} ${mission} 미션의 팀 매칭</h3>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form id='team-member-count-form'>
            <label>1팀당 인원 수</label>
            <input id='team-member-count-input' type="number" />
            <button id='match-team-button'>팀 매칭</button>
          </form>
        </div>
        `;
  };
  $('#add-team-form').innerHTML = template();
  renderCrewList(checkcourseCrew());
};

export const renderCrewList = course => {
  const crewList = store.getItem(course);
  $('#crew-list').innerHTML = `<h4>크루 목록</h4><ul id='crewUl'></ul>`;
  for (let crew in crewList) {
    $('#crewUl').innerHTML += `<li>${crewList[crew].name}</li>`;
  }
};

export const renderExistTeam = (course, mission, key) => {
  const template = () => {
    return `<h3>${course} ${mission} 조회</h3>
        <p>팀이 매칭되었습니다.</p>
        <div id='team-result-div></div>
        <p>
          팀을 재매칭 하시겠습니까?
          <button id='rematch-team-button'>재매칭</button>
        </p>`;
  };
  $('#team-list').innerHTML = template();
  renderTeams(key);
};

export const renderTeams = key => {
  const teams = store.getItem(key);
  for (let i = 0; i < teams.length; i++) {
    const newUl = document.createElement('ul');
    newUl.id = 'team-match-result';
    $('#team-result-div').innerHTML.appendChild(newUl);
    for (let j = 0; j < teams[i].length; j++) {
      newUl.innerHTML += `<li>${teams[i][j].name}</li>`;
    }
  }
};
