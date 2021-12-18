const $app = document.querySelector('#app');
const $main = document.createElement('main');

const init = () => {
  $main.innerHTML = '';
};

const completeRender = () => {
  $app.appendChild($main);
};

const renderInputCrewName = frontEndOrBackEnd => {
  const $section = document.createElement('section');

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

  $main.appendChild($section);
};

const renderCrewListRow = frontEndOrBackEnd => {
  let users = [];
  if (frontEndOrBackEnd === '프론트엔드') {
    if (!localStorage.getItem('FrontEndUser')) users = [];
    else users = localStorage.getItem('FrontEndUser')?.split(',');
  }
  if (frontEndOrBackEnd === '백엔드') {
    if (!localStorage.getItem('BackEndUser')) users = [];
    else users = localStorage.getItem('BackEndUser')?.split(',');
  }

  return users
    .map(
      (user, i) => `<tr>
        <td>${i + 1}</td>
        <td>${user}</td>
        <td>
          <button class="delete-crew-button">삭제</button>
        </td>
      </tr>
    `
    )
    .join('');
};

export const renderCrewList = frontEndOrBackEnd => {
  const $section = document.createElement('section');
  $section.innerHTML = `
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
          ${renderCrewListRow(frontEndOrBackEnd)}
        </tbody>
      </table>
    </section>
  `;

  $main.appendChild($section);
  completeRender();
};

export const renderInputCrewNameAndList = frontEndOrBackEnd => {
  init();
  renderInputCrewName(frontEndOrBackEnd);
  renderCrewList(frontEndOrBackEnd);
};
