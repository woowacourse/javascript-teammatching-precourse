import { CREW_TAP_ID, ERR_MSG, TAP_BUTTON_ID } from '../constants.js';
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
        <input type="radio" name="course" id=${CREW_TAP_ID.radioFront} value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" id=${CREW_TAP_ID.radioBack} value="backend" />
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

  sectionView(selectValue, storage) {
    this.teamView(selectValue);
    this.crewListView(selectValue, storage);
  }

  teamView(selectValue) {
    let team = '';
    if (selectValue === 'frontend') {
      team = '프론트엔드 크루 관리';
    }
    if (selectValue === 'backend') {
      team = '백엔드 크루 관리';
    }
    document.getElementById('team-view').innerHTML = `
    <h3>${team}</h3>
    <form>
      <label>크루 이름</label>
      <input id=${CREW_TAP_ID.crewName} type="text" />
      <button id=${CREW_TAP_ID.crewAddButton} >확인</button>
    </form>
    `;
  }

  crewListView(selectValue, storage) {
    let team = '';
    if (selectValue === 'frontend') {
      team = '프론트엔드 크루 목록';
    }
    if (selectValue === 'backend') {
      team = '백엔드 크루 목록';
    }
    document.getElementById('crew-list-view').innerHTML = `
    <h3>${team}</h3>
    <table border="1" id=${CREW_TAP_ID.crewTable}>
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
      ${storage
        .map(({ index, name }) => {
          if (index) {
            return `
          <tr>
            <td class="index">${index}</td>
            <td class="name">${name}</td>
            <td>
            <button id=${CREW_TAP_ID.crewDeleteButton}>삭제</button>
            </td>
          </tr>
          `;
          }
          return null;
        })
        .join('')}
      </tbody>
    </table>
    `;
  }

  errView(errNum) {
    alert(ERR_MSG[errNum]);
  }
}
