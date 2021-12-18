import { LOCAL_DB } from '../constants/index.js';
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
        <td>${i + 1}</td>
        <td>${name}</td>
        <td>
          <button>삭제</button>
        </td>
      </tr>
        `;
  });

  return html;
};
