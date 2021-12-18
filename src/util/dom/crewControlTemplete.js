export const crewControlTemplete = `
  <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" id="frontend-course" />
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" id="backend-course" />
      <label for="backend">백엔드</label>
    </div>
  </section>
  <section id="control-crew-list">
  </section>
`;

export function controlCrewListTemplete(courseName) {
  const controlCrewListTemplete = `
    <h3>${courseName} 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id="crew-name-input" />
      <button id="add-crew-buttton">확인</button>
    </form>
    <h3>${courseName} 크루 목록</h3>
    <table border="1" id="crew-table">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody id="crew-list-field">
      </tbody>
    </table>
  `;

  return controlCrewListTemplete;
}

export function CrewListTemplete(crew, index) {
  const divFragment = document.createElement('tr');
  const crewTemplete = `
    <td>${index + 1}</td>
    <td>${crew}</td>
    <td><button class="delete-crew-buttton">삭제</button></td>
  `;
  divFragment.innerHTML = crewTemplete;
  return divFragment;
}