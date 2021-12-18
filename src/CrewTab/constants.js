export const ID_CONTAINER = 'crew-tab-section';
export const ID_FORM_SECTION = 'form-section';
export const STRING_COURSE_FRONT = '프론트엔드';
export const STRING_COURSE_BACK = '백엔드';
export const CLASS_NAME_SPAN = 'selected-crew';

export const COURSE_LIST = {
  frontend: STRING_COURSE_FRONT,
  backend: STRING_COURSE_BACK,
};

export const TEMPLATE_BASE = `
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course" />
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section id="form-section"></section>
  </main>`;

export const TEMPLATE_FORM = `
  <section>
    <h3 id="crew-manage-title">
      <span class="selected-crew"></span>
      크루 관리
    </h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id="crew-name-input"/>
      <button id="add-crew-buttton">확인</button>
    </form>
  </section>
`;

export const TEMPLATE_TABLE = `
  <section>
    <h3>
      <span class="selected-crew"></span>
      크루 목록
    </h3>
    <table border="1" id="crew-table">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody id="crew-table-body">
        <tr>
          <td>1</td>
          <td>준</td>
          <td>
            <button id="delete-crew-buttton">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
`;
