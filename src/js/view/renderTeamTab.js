import { $ } from '../util/dom.js';
import { store } from '../store/store.js';

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
          <select id='select-course'>
            <option>프론트엔드</option>
            <option>백엔드</option>
          </select>
          <select>
            <option>숫자야구게임</option>
          </select>
          <button>확인</button>`;
  };
  $('#choose-course').innerHTML = template();
};

export const renderNotExistTeam = course => {
  const template = () => {
    return `<h3>${course} 숫자야구게임 미션의 팀 매칭</h3>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input type="number" />
            <button>팀 매칭</button>
          </form>
        </div>
        `;
  };
  $('#add-team-form').innerHTML = template();
};
