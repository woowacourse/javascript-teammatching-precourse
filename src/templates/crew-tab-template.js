const crewTabTemplate = {
  main: `
  <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input id="frontend-course" type="radio" name="course" value="frontend" />
      <label for="frontend">프론트엔드</label>
      <input id="backend-course" type="radio" name="course" value="backend" />
      <label for="backend">백엔드</label>
    </div>
  </section>
  <section id="crew-add-section"></section>
  <section id="crew-list-section"></section>
  `,
  addCrew: (course) => `
  <h3>${course} 크루 관리</h3>
  <form>
    <label>크루 이름</label>
    <input id="crew-name-input" type="text" />
    <button id="add-crew-buttton" >확인</button>
  </form>
  `,
  crewList: (course) => `
  <h3>${course} 크루 목록</h3>
  <table border="1" id="crew-table">
    <thead>
      <tr>
        <th></th><th>크루</th><th>관리</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  `,
  tableItem: (index, name) => `
  <tr>
    <td>${index}</td>
    <td>${name}</td>
    <td>
      <button class="delete-crew-buttton" data-crew-name="${name}">삭제</button>
    </td>
  </tr>
  `,
};

export default crewTabTemplate;
