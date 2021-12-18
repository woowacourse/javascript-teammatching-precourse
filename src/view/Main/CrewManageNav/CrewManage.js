import { BUTTON, HEADER, CREW } from '../../../common/constant.js';
import { $ } from '../../../common/element.js';

export default function createCrewManage() {
  const crewManage = `
    <section id="crew-manage"">
      <h3>${HEADER.CREW_MANAGE}</h3>
      <form>
        <label>${CREW.CREW_NAME}</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-buttton">${BUTTON.CONFIRM}</button>
      </form>
    </section>
  `;

  $('crew-manage-nav').innerHTML += crewManage;
}
