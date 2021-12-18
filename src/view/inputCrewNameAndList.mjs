const $app = document.querySelector('#app');
const $main = document.createElement('main');

const init = () => {
  $main.innerHTML = '';
};

const renderInputCrewName = frontEndOrBackEnd => {
  $main.innerHTML += `
    <section>
      <h3>${frontEndOrBackEnd} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-button">확인</button>
      </form>
    </section>
  `;

  $app.appendChild($main);
};

const renderCrewList = frontEndOrBackEnd => {
  $main.innerHTML += `
    <section>
      <h3>${frontEndOrBackEnd} 크루 목록</h3>
      <table id="crew-table" border="1">
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
              <button class="delete-crew-button">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  `;

  $app.appendChild($main);
};

export const renderInputCrewNameAndList = frontEndOrBackEnd => {
  init();
  renderInputCrewName(frontEndOrBackEnd);
  renderCrewList(frontEndOrBackEnd);
};
