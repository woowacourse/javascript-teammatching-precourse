import { BUTTON, HEADER, TEXT } from '../../../common/constant.js';
import getStandard from '../../../control/Main/CrewManageDiv/CourseSelect.js';

export default function createCourseManage() {
  const course = getStandard();

  return `
    <section>
      <h3>${course} ${HEADER.CREW_MANAGE}</h3>
      <form>
        <label>${TEXT.CREW_NAME}</label>
        <input type="text" />
        <button>${BUTTON.CONFIRM}</button>
      </form>
    </section>
  `;
}
