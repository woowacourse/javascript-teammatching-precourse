import { crewManageTemplate } from '../Templates/crewManageTemplate.js';
import { $ } from '../Utils/common.js';
import { ID, CLASS } from '../Utils/constants.js';

export default class CrewManageView {
  topSelctorRender() {
    $(`main`).innerHTML = crewManageTemplate.topSelect;
  }

  bodyMainRender() {
    $(`#${ID.CREW_MANAGE_BODY_MAIN}`).innerHTML = crewManageTemplate.bodyMain;
  }

  renderTable(data) {
    let bodyHTML = '';
    data.forEach((name, index) => {
      bodyHTML += this.makeTableBody(index + 1, name);
    });
    $(`#${ID.CREW_TABLE}`).querySelector('tbody').innerHTML = bodyHTML;
  }

  makeTableBody(number, name) {
    return `
        <tr>
            <td>${number}</td>
            <td>${name}</td>
            <td><button class=${CLASS.DELETE_CREW_BUTTON}>삭제</button></td>
        </tr>
    `;
  }
}
