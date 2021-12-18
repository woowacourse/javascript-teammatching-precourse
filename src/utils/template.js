import { ID } from '../constants/selector.js';

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
