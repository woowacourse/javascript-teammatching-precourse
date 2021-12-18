import { SELECTOR } from '../../data/selector.js';

export default class TeamTab {
  constructor() {
    this.$main = document.createElement('main');
    this.template = this.pageTemplate();
    this.hide();
  }

  hide() {
    this.$main.style.display = 'none';
  }

  show() {
    this.$main.style.display = 'block';
  }

  pageTemplate() {
    this.$main.insertAdjacentHTML('beforeend', `${this.template()}`);
  }

  template() {
    return `<section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="${SELECTOR.COURSE_SELECT}">
          <option>프론트엔드</option>
          <option>백엔드</option>
        </select>
        <select id="${SELECTOR.MISSION_SELECT}">
          <option>숫자야구게임</option>
        </select>
        <button id="${SELECTOR.SHOW_TEAM_MATCHER_BUTTON}">확인</button>
      </form>`;
  }
}
