import { INDEX_KEY, NAME_KEY } from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import store from '../store/store.js';

function renderCrewTableElement(courseStorage) {
  return courseStorage
    .map((item, index) => {
      `<tr class="crew-element-${index}">
      <td class="crew-index" dataset-crew-index='${index}'>${item[INDEX_KEY]}</td>
      <td class="crew-name">${item[NAME_KEY]}</td>
      <td><button class="delete-crew-button">삭제</button></td>
    </tr>
    `;
    })
    .join('');
}

function renderCrewTableContainer(courseTitle) {
  return `
  <h3>${courseTitle}</h3>
  <table border="1" id="crew-table">
    <thead>
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>
    <tbody class="crew-table-body">
    </tbody>
  </table>
  `;
}

export default function renderCrewTable(courseTitle, courseType) {
  $('.crew-table-container').innerHTML = renderCrewTableContainer(courseTitle);
  const courseStorage = store.getLocalStorage(courseType);
  if (courseStorage) {
    $('.crew-table-body').innerHTML = renderCrewTableElement(courseStorage);
  }
}
