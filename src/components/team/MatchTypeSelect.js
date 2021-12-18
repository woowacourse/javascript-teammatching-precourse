import {
  COURSE_SELECT,
  MISSION_SELECT,
} from '../../constants/select-option.js';

import Component from '../../core/Component.js';
import Crew from '../../models/Crew.js';
import { $, visibleElement } from '../../utils/element-tools.js';
import { storageManager } from '../../utils/data-tools.js';
import { CONSTANTS } from '../../constants/constants.js';

export default class MatchTypeSelect extends Component {
  htmlTemplate() {
    return `
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    <form>
      <select id="course-select">
        ${COURSE_SELECT.map(
          ({ name, value }) => `<option value="${value}">${name}</option>`
        )}
      </select>
      <select id="mission-select">
        ${MISSION_SELECT.map(
          ({ name, value }) => `<option value="${value}">${name}</option>`
        )}
      </select>
      <button id="show-team-matcher-button">확인</button>
    </form>
    `;
  }

  bindEvents() {
    this.addEvent(
      'click',
      '#show-team-matcher-button',
      this.handleTeamTypeSelect.bind(this)
    );
  }

  handleTeamTypeSelect(event) {
    event.preventDefault();

    const { teamManager, state } = this._props;

    const crewData = storageManager.get(CONSTANTS.STORAGE_KEY_CREW, []);
    const crewList = new Crew(crewData).setCourse(
      $('#course-select').value
    ).filterList;

    const $teamMatcher = $('.component[data-component="team-matcher"]');
    visibleElement([$teamMatcher]);

    const teamList = teamManager
      .setCrewList(crewList)
      .setTeamType(
        $('#course-select').value,
        $('#mission-select').value
      ).result;
  }
}
