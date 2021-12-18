import { $ } from '../utils/dom.js';
import { crewManageTemplate } from '../utils/template.js';

export const renderCrewManage = () => {
  $('#main-container').innerHTML = crewManageTemplate;
};
