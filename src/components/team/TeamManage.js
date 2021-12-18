import { ID } from '../../constants/index.js';
import { $ } from '../../utils/selector.js';
import { crewLists } from '../../utils/template.js';
import { isValidCount } from '../../utils/valid.js';

class TeamManage {
  constructor($target, course, mission) {
    this.$target = $target;
    this.course = course;
    this.mission = mission;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
    <h3>${this.course} ${this.mission} 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input id=${ID.TEAM_MEMBER_COUNT_INPUT} type="number" />
          <button id=${ID.MATCH_TEAM_BUTTON}>팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul>
        ${crewLists(this.course)} 
      </ul>
    </div>
    `;
  }

  selectDom() {
    this.$countInput = $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`);
    this.$matchButton = $(`#${ID.MATCH_TEAM_BUTTON}`);
    this.$ul = $('ul');
  }

  addEvent() {
    this.$matchButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton(e) {
    e.preventDefault();

    const matchCount = Number(this.$countInput.value);
    const crewCount = this.$ul.childElementCount;
    console.log(matchCount, crewCount);

    if (!isValidCount(matchCount)) {
      return;
    }
  }
}

export default TeamManage;
