const manageCrew = {
  body: `
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" id="frontend-course" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" id="backend-course" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section class="front">
      <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input" />
        <button id="add-crew-buttton">확인</button>
      </form>
    </section>
    <section class="front">
      <h3>프론트엔드 크루 목록</h3>
      <table border="1" class="crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section>
    <section class="back">
      <h3>백엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input" />
        <button id="add-crew-buttton">확인</button>
      </form>
    </section>
    <section class="back">
      <h3>백엔드 크루 목록</h3>
      <table border="1" class="crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section>
  `,
  table: (crew, index) => `
  <tr>
    <td>${index + 1}</td>
    <td>${crew}</td>
    <td>
      <button class="delete-crew-buttton">삭제</button>
    </td>
  </tr>
  `,
};

export default manageCrew;
