import { crewManageTemplate } from '../Templates/crewManageTemplate.js';
import { $ } from '../Utils/common.js';
import { ID } from '../Utils/constants.js';

export default class CrewManageView {
  topSelctorRender() {
    $(`main`).innerHTML = crewManageTemplate.topSelect;
  }

  bodyMainRender() {
    $(`#${ID.CREW_MANAGE_BODY_MAIN}`).innerHTML = crewManageTemplate.bodyMain;
  }
}
