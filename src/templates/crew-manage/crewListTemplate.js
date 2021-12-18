/* eslint-disable max-lines-per-function */
import { ELEMENT_SELECTOR } from '../../constants/index.js';

const row = ({ index, name }) => {
  const { DELETE_CREW_BUTTON } = ELEMENT_SELECTOR.CLASSES.CREW_MANAGE;
  return `
    <tr>
      <td>${index}</td>
      <td>${name}</td>
      <td>
        <button type="button" class="${DELETE_CREW_BUTTON}">삭제</button>
      </td>
    </tr>
  `;
};

const list = (crews, course) => {
  let index = 1;
  const rows = crews.reduce((acc, crew) => {
    if (crew.course === course) {
      acc += row({ index, name: crew.name });
      index += 1;
    }
    return acc;
  }, '');
  return rows;
};

export const crewListTemplate = (crews, courseName, course) => {
  const { CREW_LIST_TABLE } = ELEMENT_SELECTOR.IDS.CREW_MANAGE;
  return `
    <section>
      <h3>${courseName} 크루 목록</h3>
      <table border="1" id="${CREW_LIST_TABLE}">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${list(crews, course)}
        </tbody>
      </table>
    </section>
  `;
};
