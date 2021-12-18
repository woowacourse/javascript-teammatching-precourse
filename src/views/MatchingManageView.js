import CourseModel from '../models/CourseModel.js';
import CrewManageModel from '../models/CrewManageModel.js';
import MissionModel from '../models/MissionModel.js';
import { COURSE } from '../utils/constants.js';
import View from './View.js';

const MatchingManageView = { ...View };

MatchingManageView.setup = function (element) {
  this.init(element);
  this.bindEvent();
  this.course;
  this.mission;
  return this;
};

MatchingManageView.bindEvent = function () {
  this.element.addEventListener('click', (e) => {
    if (e.target.id === 'show-team-matcher-button') {
      e.preventDefault();
      this.onSubmitMissionAndCourse();
      return;
    }
    if (e.target.id === 'match-team-button') {
      e.preventDefault();
      this.onSubmitMinCrewCount();
    }
  });
};

MatchingManageView.onSubmitMissionAndCourse = function () {
  this.emit('@submitCourseAndMission', {
    course: this.child('#course-select').value,
    mission: this.child('#mission-select').value,
  });
};

MatchingManageView.onSubmitMinCrewCount = function () {
  this.emit('@submitMinCrewCount', { count: this.child('#team-member-count-input').value });
};

MatchingManageView.setMission = function (mission) {
  this.mission = mission;
};

MatchingManageView.setCourse = function (course) {
  this.course = course;
};

MatchingManageView.render = function () {
  this.element.innerHTML = `
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
        ${CourseModel.list().map(
          (course) => `<option ${this.course === course ? 'selected' : ''}>${course}</option>`,
        )}
        </select>
        <select id="mission-select">
        ${MissionModel.list()
          .map(
            (mission) =>
              `<option ${this.mission === mission ? 'selected' : ''}>${mission}</option>`,
          )
          .join('')}
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    </section>
    ${
      this.course
        ? `<section>
    <h3>${this.course} ${this.mission} 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input id="team-member-count-input" type="number" />
          <button id="match-team-button">팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul>
      ${CrewManageModel.list()
        [COURSE[this.course]].map((crew) => `<li>${crew}</li>`)
        .join('')}
      </ul>
    </div>
  </section>`
        : ''
    }

    <!-- 팀 매칭이 된 경우 -->
    <section>
      <h3>${this.course} 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul id="team-match-result">
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id="rematch-team-button">재매칭</button>
      </p>
    </section>
    `;
};

export default MatchingManageView;
