import { SELECTOR } from '../data/selector.js';
import { $ } from '../utils/domElementTool.js';

export default class TeamMatcherView {
  constructor(crew) {
    this.crew = crew;
  }

  crewTableItemTemplate(crew, index) {
    return `<tr>
            <td>${index + 1}</td>
            <td>${crew}</td>
            <td>
              <button id="${SELECTOR.DELETE_CREW_BUTTON}">삭제</button>
            </td>
          </tr>`;
  }

  renderCrewList(crewList) {
    let items = '';

    crewList.forEach((crew, index) => {
      items += this.crewTableItemTemplate(crew, index);
    });

    $(`#${SELECTOR.CREW_TABLE}>tbody`).innerHTML = items;
  }
}
