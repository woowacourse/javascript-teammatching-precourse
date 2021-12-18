import { ID, TEXT, VALUE } from "../../constant/constant.js";

const teamMatch = `
<h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
<form>
  <select id=${ID.COURSE_SELECT}>
    <option value=${VALUE.FRONT}>${TEXT.FRONT}</option>
    <option value=${VALUE.BACK}>${TEXT.BACK}</option>
  </select>
  <select id=${ID.MISSION_SELECT}>
    <option value=${VALUE.BASEBALL}>${TEXT.BASEBALL}</option>
    <option value=${VALUE.RACING}>${TEXT.RACING}</option>
    <option value=${VALUE.LOTTO}>${TEXT.LOTTO}</option>
    <option value=${VALUE.SHOP}>${TEXT.SHOP}</option>
    <option value=${VALUE.PAY}>${TEXT.PAY}</option>
    <option value=${VALUE.SUBWAY}>${TEXT.SUBWAY}</option>
    <option value=${VALUE.PERFORMANCE}>${TEXT.PERFORMANCE}</option>
    <option value=${VALUE.DEPOLY}>${TEXT.DEPOLY}</option>
  </select>
  <button id=${ID.SHOW_TEAM_MATCHER} type="button">확인</button>
</form>`;

const teamMatchForm = (course, mission, crew) => `
${teamMatchHeader(course, mission)}
  <div>
    <div>
      <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
      <form>
        <label>1팀당 인원 수</label>
        <input type="number" id=${ID.TEAM_INPUT} />
        <button id=${ID.TEAM_MATCH_BUTTON} type="button">팀 매칭</button>
      </form>
      </div>
        <h4>크루 목록</h4>
      <ul>
        ${crew
          .map((crew) => {
            return `<li>${crew}</li>`;
          })
          .join("")}
      </ul>
  </div>
`;

const teamMatchHeader = (course, mission) => {
  let printCourse = TEXT.FRONT;
  let printMission = TEXT.BASEBALL;

  if (course === "backend") {
    printCourse = TEXT.BACK;
  }

  if (mission === VALUE.LOTTO) {
    printMission = TEXT.LOTTO;
  }
  if (mission === VALUE.SHOP) {
    printMission = TEXT.SHOP;
  }
  if (mission === VALUE.PAY) {
    printMission = TEXT.PAY;
  }
  if (mission === VALUE.SUBWAY) {
    printMission = TEXT.SUBWAY;
  }
  if (mission === VALUE.PERFORMANCE) {
    printMission = TEXT.PERFORMANCE;
  }
  if (mission === VALUE.DEPOLY) {
    printMission = TEXT.DEPOLY;
  }
  return `<h3>
      ${printCourse} ${printMission} 미션의 팀 매칭
    </h3>`;
};

export { teamMatch, teamMatchForm };
