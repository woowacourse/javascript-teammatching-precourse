import { ID } from '../../utils/constants.js';

export const template = `
<section>
  <h3>크루를 관리할 코스를 선택해주세요</h3>
  <div>
    <input id=${ID.FRONTEND_COURSE} type="radio" name="course" value="frontend" />
    <label for="frontend">프론트엔드</label>
    <input id=${ID.BACKEND_COURSE} type="radio" name="course" value="backend" />
    <label for="backend">백엔드</label>
  </div>
</section>
<section>
  <h3>프론트엔드 크루 관리</h3>
  <form>
    <label>크루 이름</label>
    <input id=${ID.CREW_NAME_INPUT} type="text" />
    <button id=${ID.ADD_CREW_BTN}>확인</button>
  </form>
</section>
<section>
  <h3>프론트엔드 크루 목록</h3>
  <table id=${ID.CREW_TABLE} border="1">
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
          <button>삭제</button>
        </td>
      </tr>
    </tbody>
  </table>
</section>`;
