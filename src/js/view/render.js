import { $ } from '../util/dom.js';
import { store } from '../store/store.js';

export const renderMain = () => {
  const template = () => {
    return `
        <main>
            <section id='choose-course'></section>
            <section id='add-crew-form'></section>
            <section id='crew-table'></section>
        </main>
        `;
  };
  $('#app').innerHTML += template();
};

export const renderAddCrewRadio = () => {
  const template = () => {
    return `
    <main>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course" />
        <label for="backend">백엔드</label>
      </div>
    </main>`;
  };
  $('#choose-course').innerHTML = template();
};

export const renderAddCrewForm = course => {
  const template = () => {
    return `
      <h3>${course} 크루 관리</h3>
      <form id='add-crew-form'>
        <label>크루 이름</label>
        <input type="text" id='crew-name-input' />
        <button id='add-crew-button'>확인</button>
      </form>`;
  };
  $('#add-crew-form').innerHTML = template();
};

export const renderCrewTable = course => {
  const template = () => {
    return `<section><h3>${course} 크루 목록</h3>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table></section>`;
  };
  $('#crew-table').innerHTML = template();
};

export const renderCrewTableItems = course => {
  const crewList = store.getItem(course);
  const template = crewList.map(crew => {
    return `
      <tr>
        <td>${crew.index}</td>
        <td>${crew.name}</td>
        <td><button id='crew-delete-button'>삭제</button></td>
      </tr>`;
  });
  $('tbody').innerHTML = template.join('');
};
