import { feCrewList, beCrewList } from '../model/store.js';
import { $, $$ } from '../utils/dom.js';

class crewView {
  getInput() {
    return $('#crew-name-input').value;
  }

  getFECrewList() {
    const feCrew = feCrewList;
    return feCrew
      .map((name, index) => {
        return `
      <tr>
        <td>${index + 1}</td>
        <td>${name}</td>
      <td>
        <button class="delete-crew-buttton">삭제</button>
      </td>
      </tr>`;
      })
      .join('');
  }

  renderFECrewList() {
    $('#crew-table-tbody').innerHTML = this.getFECrewList();
  }

  getBECrewList() {
    const beCrew = beCrewList;
    return beCrew
      .map((name, index) => {
        return `
      <tr>
        <td>${index + 1}</td>
        <td>${name}</td>
      <td>
        <button class="delete-crew-buttton">삭제</button>
      </td>
      </tr>`;
      })
      .join('');
  }

  renderBECrewList() {
    $('#crew-table-tbody').innerHTML = this.getBECrewList();
  }

  manageCourseTemplate() {
    return `
      <section id="manage-crew-course">
        <h3>크루를 관리할 코스를 선택해주세요</h3>
        <div>
          <input id="frontend-course" type="radio" name="course" value="frontend" />
          <label for="frontend">프론트엔드</label>
          <input id="backend-course" type="radio" name="course" value="backend" />
          <label for="backend">백엔드</label>
        </div>
      </section>`;
  }

  manageCrewTemplate() {
    return `      
      <section id="manage-crew">
        <h3>프론트엔드 크루 관리</h3>
        <form>
          <label>크루 이름</label>
          <input id="crew-name-input" type="text" />
          <button id="add-crew-buttton">확인</button>
        </form>
      </section>
      `;
  }

  crewListTemplate() {
    return `
    <section id="crew-list"> 
      <table id="crew-table" border="1">
          <h3>프론트엔드 크루 목록</h3>
          <thead>
            <tr>
              <th></th>
              <th>크루</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody id="crew-table-tbody">
          </tbody>
      </table>
      </section>`;
  }
}

export default crewView;
