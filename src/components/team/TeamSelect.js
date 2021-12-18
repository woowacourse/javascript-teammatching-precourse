import { COURSE_NAME, ID, MISSION_NAME } from '../../constants/index.js';
import { $ } from '../../utils/selector.js';
import { courseList, missionList } from '../../data/index.js';
import { optionSelectList } from '../../utils/template.js';
import TeamManage from './TeamManage.js';

class TeamSelect {
  constructor($selectSection, $manageSection) {
    this.$selectSection = $selectSection;
    this.$manageSection = $manageSection;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$selectSection.innerHTML = `
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id=${ID.COURSE_SELECT}>
          ${optionSelectList(courseList)}
        </select>
        <select id=${ID.MISSION_SELECT}>
          ${optionSelectList(missionList)}
        </select>
        <button id=${ID.SHOW_TEAM_MATCHER_BUTTON}>확인</button>
      </form>
    `;
  }

  selectDom() {
    this.$courseSelect = $(`#${ID.COURSE_SELECT}`);
    this.$missionSelect = $(`#${ID.MISSION_SELECT}`);
    this.$matchButton = $(`#${ID.SHOW_TEAM_MATCHER_BUTTON}`);
  }

  addEvent() {
    this.$matchButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton(e) {
    e.preventDefault();

    const course = this.$courseSelect.value;
    const mission = this.$missionSelect.value;

    new TeamManage(
      this.$manageSection,
      COURSE_NAME[course],
      MISSION_NAME[mission]
    );
  }
}

export default TeamSelect;
