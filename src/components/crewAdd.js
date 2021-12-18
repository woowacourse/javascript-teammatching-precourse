import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';

export const setCrewTable = (crews) => {
  if (crews.length != 0) {
    let i = 1;
    $(`#${SELECTOR.ID.CREW_TABLE}`).innerHTML += crews
      .map(
        (crew) => `
            <tr class="${SELECTOR.CLASS.CREW_TABLE_LINE}">
              <td>${i++}</td>
              <td>${crew}</td>
              <td><button class="${
                SELECTOR.CLASS.DELETE_CREW_BUTTON
              }">삭제</button></td>
            </tr>`
      )
      .join('');
  }
  if (crews.length == 0) {
    $(`#${SELECTOR.ID.CREW_TABLE}`).innerHTML = `
    <thead>
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>`;
  }
};
