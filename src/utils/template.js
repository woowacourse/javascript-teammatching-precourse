import { CLASS, LOCAL_DB } from '../constants/index.js';
import { getLocalStorage } from './localStorage.js';

export const crewTableHeader = () => {
  return `
    <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
    </tr>
  `;
};

export const crewTableContents = courseName => {
  let html = '';
  let list = '';

  if (courseName === '프론트엔드') {
    list = getLocalStorage(LOCAL_DB.CREW_FRONT);
  } else {
    list = getLocalStorage(LOCAL_DB.CREW_BACK);
  }

  list.forEach((name, i) => {
    html += `
      <tr>
        <td data-index=${i}>${i + 1}</td>
        <td>${name}</td>
        <td>
          <button class=${CLASS.DELETE_CREW_BUTTON}>삭제</button>
        </td>
      </tr>
    `;
  });

  return html;
};

export const optionSelectList = list => {
  let html = '';

  list.forEach(({ name, value }) => {
    html += `<option value=${value}>${name}</option>`;
  });

  return html;
};

export const crewLists = courseName => {
  let html = '';
  let list = '';

  if (courseName === '프론트엔드') {
    list = getLocalStorage(LOCAL_DB.CREW_FRONT);
  } else {
    list = getLocalStorage(LOCAL_DB.CREW_BACK);
  }

  list.forEach((name, i) => {
    html += `
      <li>${name}</li>
    `;
  });

  return html;
};
