import { teamMatchTemplate } from '../Templates/teamMatchTemplate.js';
import { $ } from '../Utils/common.js';
import { ID, CLASS } from '../Utils/constants.js';
import LocalStorageUtils from '../Utils/localStorageUtils.js';

export default class TeamMatchView {
  topSelectRender() {
    $(`main`).innerHTML = teamMatchTemplate.topSelect;
  }

  bodyMainRender() {
    $(`#${ID.TEAM_MATCH_BODY_MAIN}`).innerHTML = teamMatchTemplate.bodyMain;
  }

  matchedMainRender() {
    $(`#${ID.TEAM_MATCH_BODY_MAIN}`).innerHTML = teamMatchTemplate.matchedMain;
  }

  crewListRender(list) {
    let crewListHTML = '';
    list.forEach((item) => {
      crewListHTML += this.createListRow(item);
    });
    $(`#${ID.CREW_LIST}`).innerHTML = crewListHTML;
  }

  createListRow(name) {
    return `<li>${name}</li>`;
  }

  matchedListRender(list) {
    let listHTML = '';
    list.forEach((item) => {
      const text = item.join(',');
      listHTML += this.createListRow(text);
    });
    $(`#${ID.TEAM_MATCH_RESULT}`).innerHTML = listHTML;
  }
}
