/* eslint-disable max-lines-per-function */
import { ELEMENT_SELECTOR } from '../../constants/index.js';

export const courseSelectTemplate = (activeCourseId) => {
  const { COURSE_SELECT, FRONTEND_COURSE_RADIO, BACKEND_COURSE_RADIO } = ELEMENT_SELECTOR.IDS.CREW_MANAGE;
  return `
    <section id="${COURSE_SELECT}">
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" id="${FRONTEND_COURSE_RADIO}" 
        ${activeCourseId === FRONTEND_COURSE_RADIO ? 'checked' : ''}/>
        <label for="${FRONTEND_COURSE_RADIO}">프론트엔드</label>
        <input type="radio" name="course" id="${BACKEND_COURSE_RADIO}"
          ${activeCourseId === BACKEND_COURSE_RADIO ? 'checked' : ''}/>
        <label for="${BACKEND_COURSE_RADIO}">백엔드</label>
      </div>
    </section>
  `;
};
