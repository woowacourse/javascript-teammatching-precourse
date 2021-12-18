import { OPTIONS } from "../../utils/constants.js";

const courseSelectOptions = () => {
  const { course } = OPTIONS;

  return `
    <select id="course-select">
      <option value=${course[0]}>프론트엔드</option>
      <option value=${course[1]}>백엔드</option>
    </select>
  `;
};

const missionSelectOptions = () => {
  const { mission } = OPTIONS;
  let options = "";

  for (let i = 0; i < mission.length; i++) {
    options += `<option value=${mission[i].value}>${mission[i].name}</option>`;
  }

  return `
    <select id="mission-select">
      ${options}
    </select>
  `;
};

const selectCourseSection = () => {
  return `
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        ${courseSelectOptions()}
        ${missionSelectOptions()}
        <button id="show-team-matcher-button">확인</button>
      </form>
    </section>
  `;
};

const addTeamManager = () => {
  const $main = document.getElementsByTagName("main")[0];

  $main.innerHTML += `
    <div id="team-manager" hidden>
      ${selectCourseSection()}
      <section id="team-maching"></section>
    </div>
  `;
};

export { addTeamManager };
