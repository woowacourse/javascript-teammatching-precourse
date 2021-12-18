import { crewManageTemplate } from '../Templates/crewManageTemplate.js';
import { $ } from '../Utils/common.js';

export default class CrewManageView {
  topSelctorRender() {
    $(`main`).innerHTML = crewManageTemplate.topSelect;
  }
}
