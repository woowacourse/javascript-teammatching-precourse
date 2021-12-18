import { $ } from '../utils/dom.js';
import { crewManageTemplate } from '../utils/template.js';

export const renderFrontEnd = () => {
  $('#crew-manage-list').removeAttribute('hidden');
};

export const renderCrewManage = () => {
  $('#main-container').innerHTML = crewManageTemplate;
};
