import { STRING } from '../constants/constants.js';

export const headerTemplate = () => {
  return `
   <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id="crew-tab">크루 관리</button>
        </li>
        <li>
          <button id="team-tab">팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main></main>
  `;
};

export const selectCourseTemplate = () => {
  return `
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input id="frontend-course" type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input id="backend-course" type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
    </section>
  `;
};

export const crewManageTemplate = (crews) => {
  console.log(crews);
  return `
    <section>
      <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-button">확인</button>
      </form>
    </section>
    <section>
      <h3>프론트엔드 크루 목록</h3>
      <table id="crew-table" border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${crewTableTemplate(crews)}
        </tbody>
      </table>
    </section>
    `;
};

export const crewTableTemplate = (crews) => {
  return `
    ${
      crews &&
      crews
        .map((crew, idx) => {
          console.log(crew);
          return `
              <tr>
                <td>${idx + 1}</td>
                <td>${crew.name}</td>
                <td><button id="delete-crew-button">삭제</button>
                </td>
              </tr>
            `;
        })
        .join(STRING.EMPTY)
    }
  `;
};
