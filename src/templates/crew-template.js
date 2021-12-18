import { SELECTOR } from '../constant/constant.js';

export const crewTemplate = () => {
  return `    
    <section id="crew-radio-section">
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="${SELECTOR.ID.FRONTEND_COURSE}"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="${SELECTOR.ID.BACKEND_COURSE}"/>
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section id="crew-add-section" style="display:none">
      <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="${SELECTOR.ID.CREW_NAME_INPUT}"/>
        <button id="${SELECTOR.ID.ADD_CREW_BUTTON}">확인</button>
      </form>
    </section>
    <section id="crew-table-section" style="display:none">
      <h3>프론트엔드 크루 목록</h3>
      <table border="1" id="${SELECTOR.ID.CREW_TABLE}">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      </table>
    </section>
  `;
};
