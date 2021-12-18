import { CLASS, ID } from '../constants/selector.js';
import { MISSION } from '../data/data.js';

export function navBar() {
  return `<nav>
    <ul>
      <li>
        <button id = ${ID.TAB_CREW}>크루 관리</button>
      </li>
      <li>
        <button id = ${ID.TAB_TEAM}>팀 매칭 관리</button>
      </li>
    </ul>
  </nav>`;
}

export function choiceCourseRadioBox() {
  return `<h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" id=${ID.COURSE_CHOICE_FRONT} checked/>
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" id=${ID.COURSE_CHOCIE_BACK}/>
      <label for="backend">백엔드</label>
    </div>`;
}

export function crewNameForm() {
  return `<form>
        <label>크루 이름</label>
        <input type="text" id=${ID.CREW_NAME_INPUT}/>
        <button>확인</button>
      </form>`;
}

export function crewStatusTable(crews) {
  let table = `<table border="1">
    <thead>
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>`;
  crews.forEach((crew, idx) => {
    table += `<tr>
      <td>${idx + 1}</td>
      <td>${crew}</td>
      <td>
        <button class = ${CLASS.DELETE_CREW_BUTTON} value=${crew}>삭제</button>
      </td>
    </tr>`;
  });
  table += `</table>`;
  return table;
}

export function selectMissionForm() {
  return `<select id=${ID.TEAM_MATCHING_COURSE_CHOICE}>
    <option>프론트엔드</option>
    <option>백엔드</option>
  </select>
  <select id = ${ID.TEAM_MATCHING_MISSION_CHOICE}>
  ${MISSION.reduce(
    (acc, cur) =>
      `${acc}<option value = ${Object.keys(cur)}>${Object.values(
        cur
      )}</option>`,
    ''
  )}</select>
  <button id=${ID.TEAM_MATCHING_SEARCH_BUTTON}>확인</button>`;
}

export function selectNumberOfCrew() {
  return `<form>
    <label>1팀당 인원 수</label>
    <input type="number" id = ${ID.TEAM_MEMEBER_COUNT_INPUT}/>
    <button id = ${ID.TEAM_MATCH_BUTTON}>팀 매칭</button>
  </form>`;
}

export function showCrew(crew) {
  return `<h4>크루 목록</h4>
    <ul>
      ${crew.reduce((acc, cur) => `${acc}<li>${cur}<li/>`, '')}
    </ul>`;
}

export function showMatchingCrew(crew) {
  const crewList = crew.map((members) => members.join(''));
  return `<p>
  ${crewList.reduce((acc, cur) => `${acc}<li>${cur}<li/>`, '')}
    </p>`;
}

export function rematchCrew() {
  return `<p>
    팀을 재매칭 하시겠습니까?
    <button id=${ID.REMATCH_BUTTON}>재매칭</button>
  </p>`;
}
