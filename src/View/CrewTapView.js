import { CREWTAP_ID, TAP_BUTTON_ID } from '../constants.js';
import TapView from './TapView.js';

export default class CrewTapView extends TapView {
  render() {
    this.template();
  }

  template() {
    this.app.innerHTML = `
    <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id=${TAP_BUTTON_ID.crew}>크루 관리</button>
        </li>
        <li>
          <button id=${TAP_BUTTON_ID.team}>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id=${CREWTAP_ID.radioFront}/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id=${CREWTAP_ID.radioBack}/>
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section id="team-view">
    </section>
    <section id="crew-list-view">
    </section>
  </main>
    `;
  }

  teamView(radioValue) {
    // radio 값에 따라서 팀 이름과 목록 출력.
    document.getElementById('team-view').innerHTML = `
    <h3></h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id=${CREWTAP_ID.crewName}/>
      <button id=${CREWTAP_ID.crewButton}>확인</button>
    </form>
    `;
  }

  crewListView(radioValue) {
    // radioValue에 따라서 프론트 or back 크루 목록 출력.
    document.getElementById('crew-list-view').innerHTML = `
    <h3>프론트엔드 크루 목록</h3>
    <table border="1" id=${CREWTAP_ID.crewTable}>
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>준</td>
          <td>
            <button>삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
    `;
  }
}
