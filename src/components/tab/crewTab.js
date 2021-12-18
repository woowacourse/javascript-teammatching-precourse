import { SELECTOR } from '../../data/selector.js';

export default class CrewTab {
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
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input id="${SELECTOR.FRONTEND_COURSE_INPUT}" type="radio" name="course" value="frontend" />
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" />
      <label  id="${SELECTOR.BACKEND_COURSE_INPUT}" for="backend">백엔드</label>
    </div>
  </section>
  <section>
    <h3>프론트엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input id="${SELECTOR.CREW_NAME_INPUT}" type="text" />
      <button id="${SELECTOR.ADD_CREW_BUTTON}">확인</button>
    </form>
  </section>
  <section>
    <h3>프론트엔드 크루 목록</h3>
    <table border="1">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </section>`;
  }
}
