import CrewManageModel from '../models/CrewManageModel.js';
import View from './View.js';
import { COURSE } from '../utils/constants.js';

const CrewManageView = { ...View };

CrewManageView.setup = function (element) {
  this.init(element);
  this.bindEvent();

  this.course;
  return this;
};

CrewManageView.bindEvent = function () {
  this.element.addEventListener('click', (e) => {
    if (e.target.closest('div').id === 'course-select-form' && e.target.tagName === 'INPUT') {
      this.onChangeCourse(e.target.value);
      return;
    }
    if (e.target.id === 'add-crew-button') {
      e.preventDefault();
      this.onSubmitCrewName(this.child('#crew-name-input').value);
      return;
    }
    if (e.target.className === 'delete-crew-button') {
      e.preventDefault();
      const { 1: nameNode } = e.target.closest('tr').children;
      this.onDeleteCrew(nameNode.innerText);
    }
  });
};

CrewManageView.setCourse = function (course) {
  this.course = course;
};

CrewManageView.onChangeCourse = function (course) {
  this.emit('@changeCourse', { course });
};

CrewManageView.onSubmitCrewName = function (name) {
  this.emit('@submitCrewName', { course: this.course, name });
};

CrewManageView.onDeleteCrew = function (name) {
  this.emit('@deleteCrew', { course: this.course, name });
};

CrewManageView.render = function () {
  this.element.innerHTML = `
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div id="course-select-form">
        <input id="frontend-course" type="radio" name="course" value="frontend" ${
          this.course === 'frontend' ? 'checked' : ''
        }/>
        <label for="frontend">프론트엔드</label>
        <input id="backend-course" type="radio" name="course" value="backend" ${
          this.course === 'backend' ? 'checked' : ''
        }/>
        <label for="backend">백엔드</label>
      </div>
    </section>
    ${
      this.course !== undefined
        ? `<section>
    <h3>${COURSE[this.course]} 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input id="crew-name-input" type="text" />
      <button id="add-crew-button" >확인</button>
    </form>
  </section>
  <section>
    <h3>${COURSE[this.course]} 크루 목록</h3>
    <table id="crew-table" border="1">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
      ${CrewManageModel.list()
        [this.course].map(
          (name, idx) => `
        <tr>
            <td>${idx + 1}</td>
            <td>${name}</td>
            <td>
              <button class="delete-crew-button">삭제</button>
            </td>
          </tr>
        `,
        )
        .join('')}
      </tbody>
    </table>
  </section>`
        : ''
    }
    `;
};

export default CrewManageView;
