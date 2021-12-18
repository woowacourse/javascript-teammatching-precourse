import { SELECTOR } from '../constant/constant.js';

export const crewRadioTemplate = () => {
  return `
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="${SELECTOR.ID.FRONTEND_COURSE}"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="${SELECTOR.ID.BACKEND_COURSE}"/>
        <label for="backend">백엔드</label>
      </div>
    </section>
  `;
};
