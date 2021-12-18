import { FIELDS } from '../constants.js';

export const templates = {
  common: `
    <section id="section_1"></section>
    <section id="section_2"></section>  
    <section id="section_3"></section>
  `,

  header: `
    <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input id="frontend-course" type="radio" name="course" value="frontend" />
        <label for="frontend-course">프론트엔드</label>
        <input id="backend-course" type="radio" name="course" value="backend" />
        <label for="backend-course">백엔드</label>
      </div>
      `,
  inputCrew(value) {
    return `
      <h3>${
        value === 'frontend' ? FIELDS.FRONT_END : FIELDS.BACK_END
      } 크루 관리</h3>
      <form onsubmit="return false">
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-buttton">확인</button>
      </form>
    `;
  },

  crewTable(value) {
    return `  
     <section id="section_3">
      <h3>${
        value === 'frontend' ? FIELDS.FRONT_END : FIELDS.BACK_END
      } 크루 목록</h3>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody id="crew_list">
        </tbody>
      </table>
     </section>`;
  },

  crew(item, index) {
    return `
        <tr data-crew-id=${item.id}>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>
              <button id="delete-crew-buttton" class="delete-crew-buttton">삭제</button>
            </td>
        </tr>
     `;
  },
};
