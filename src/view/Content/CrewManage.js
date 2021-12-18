import { DOM } from '../../constants/index.js';
import { radioChecked } from '../../common/parsed.js';

const CrewManage = checked => `
  <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend"
        id="${DOM.FRONTEND_COURSE}"
        ${radioChecked(checked, DOM.FRONTEND_COURSE)}/>
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend"
        id="${DOM.BACKEND_COURSE}"
        ${radioChecked(checked, DOM.BACKEND_COURSE)}/>
      <label for="backend">백엔드</label>
    </div>
  </section>
  <section>
    <h3>프론트엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id="${DOM.CREW_NAME_INPUT}" placeholder="크루 이름"/>
      <button id="${DOM.ADD_CREW_BUTTON}">확인</button>
    </form>
  </section>
  <section>
    <h3>프론트엔드 크루 목록</h3>
    <table border="1" id="crew-table">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>준</td>
          <td>
            <button class="${DOM.DELETE_CREW_BUTTON}">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  `;

export default CrewManage;
