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
        <form>
          <select>
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
