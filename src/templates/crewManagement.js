import { CREW_MANAGEMENT } from '../constants/selector.js';

function courseSection() {
  return `
    <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input id=${CREW_MANAGEMENT.ID.FRONTEND_COURSE} type="radio" name="course" value="frontend" checked/>
      <label for="frontend">프론트엔드</label>
      <input id=${CREW_MANAGEMENT.ID.BACKEND_COURSE} type="radio" name="course" value="backend" />
      <label for="backend">백엔드</label>
    </div>
  </section>
    `;
}

function crewInputSection() {
  return `
    <section>
    <h3>프론트엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input id=${CREW_MANAGEMENT.ID.CREW_NAME_INPUT} type="text" />
      <button id=${CREW_MANAGEMENT.ID.ADD_CREW_BUTTON}>확인</button>
    </form>
  </section>
    `;
}

function main() {
  return `
    <main>
    ${courseSection()}
    ${crewInputSection()}
    </main>
    `;
}

export default function crewManagement() {
  return `
    ${main()}
    `;
}
