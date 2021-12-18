import { $ } from '../dom/dom.js';

export default function renderCourseCrewManage(courseType) {
  $('.course-container').innerHTML = `
  <h3>${courseType}</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button type="button" id="add-crew-button">확인</button>
      </form>
  `;
}
