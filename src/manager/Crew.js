import {
  CREW_INPUT_ID,
} from '../constant/constant.js';

export default class Crew {
  constructor({ course, name }, index) {
    this.course = course;
    this.name = name;
    this.index = index;
  }

  tableTemplate() {
    return `
      <tr>
        <td>${this.index}</td>
        <td>${this.name}</td>
        <td>
          <button class="${CREW_INPUT_ID.DELETE_BUTTON}">삭제</button>
        </td>
      </tr>
    `;
  }

  renderTable(dom) {
    dom.insertAdjacentHTML('beforeend', this.tableTemplate());
  }

  renderUpdate($nodeToDelete) {
    const $copy = $nodeToDelete;

    $copy.remove();
  }
}
