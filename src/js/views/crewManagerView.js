import $ from '../utils/dom.js';
import store from '../utils/store.js';

export const renderFrontCrew = () => {
  const template = store
    .getLocalStorage('FrontCrew')
    .map((crew, idx) => {
      return `
    <tr data-crew-id="${idx}">
      <td>${idx + 1}</td>
      <td>${crew.name}</td>
      <td>
        <button id="delete-crew-buttton">삭제</button>
      </td>
    </tr>
    `;
    })
    .join('');

  $('#crew-list').innerHTML = template;
};

export const renderBackCrew = () => {
  const template = store
    .getLocalStorage('BackCrew')
    .map((crew, idx) => {
      return `
    <tr data-crew-id="${idx}">
      <td>${idx + 1}</td>
      <td>${crew.name}</td>
      <td>
        <button id="delete-crew-buttton">삭제</button>
      </td>
    </tr>
    `;
    })
    .join('');

  $('#crew-list').innerHTML = template;
};

export const renderFrontManager = () => {
  $('#crew-list').innerHTML = '';
  $('#add-crew-wrapper').style.display = 'block';
  $('#crew-list-wrapper').style.display = 'block';
  $('#add-crew-title').innerText = '프론트엔드 크루 관리';
  $('#crew-list-title').innerText = '프론트엔드 크루 목록';
  if (store.getLocalStorage('FrontCrew')) {
    renderFrontCrew();
  }
};

export const renderBackManager = () => {
  $('#crew-list').innerHTML = '';
  $('#add-crew-wrapper').style.display = 'block';
  $('#crew-list-wrapper').style.display = 'block';
  $('#add-crew-title').innerText = '백엔드 크루 관리';
  $('#crew-list-title').innerText = '백엔드 크루 목록';
  if (store.getLocalStorage('BackCrew')) {
    renderBackCrew();
  }
};

export const resetCrewInput = () => {
  $('#crew-name-input').value = '';
};
