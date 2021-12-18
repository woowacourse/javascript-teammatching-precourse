import { BUTTON, COURSE, HEADER, MISSION } from '../../../common/constant.js';

// eslint-disable-next-line max-lines-per-function
export default function createSelect() {
  return `
    <section>
      <h3>${HEADER.SELECT}</h3>
      <form>
        <select>
          <option>${COURSE.FRONTEND}</option>
          <option>${COURSE.BACKEND}</option>
        </select>
        <select>
          <option>${MISSION.BASEBALL}</option>
        </select>
        <button>${BUTTON.CONFIRM}</button>
      </form>
    </section>
  `;
}
