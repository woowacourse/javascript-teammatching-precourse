/* eslint-disable max-lines-per-function */
import { ELEMENT_SELECTOR } from '../../constants/index.js';

export const addCrewTemplate = (courseName) => {
  const { ADD_CREW, ADD_CREW_INPUT, ADD_CREW_BUTTON } = ELEMENT_SELECTOR.IDS.CREW_MANAGE;
  return `
    <section id="${ADD_CREW}">
      <h3>${courseName} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="${ADD_CREW_INPUT}"/>
        <button type="button" id="${ADD_CREW_BUTTON}">확인</button>
      </form>
    </section>
  `;
};
