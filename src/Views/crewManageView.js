import { crewManageTemplate } from '../Templates/crewManageTemplate.js';
import { $ } from '../Utils/common.js';

export default class CrewManageView {
  render() {
    $(`main`).innerHTML = crewManageTemplate.topSelect;
  }
}
