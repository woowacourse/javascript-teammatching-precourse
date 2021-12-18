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
  <button id=${ID.SHOW_TEAM_MATCHER}>확인</button>
</form>`;

export { teamMatch };
