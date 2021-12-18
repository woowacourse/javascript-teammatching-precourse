import { default as UT } from './utils.js';

export const $ = selector => document.querySelector(selector);

const DOMUtils = {
  hideComponents: () => {
    Array.from($('#component').children).forEach(menu => (menu.style.display = 'none'));
  },

  showComponent: id => {
    DOMUtils.hideComponents();

    $(UT.changeIdToComponent(id)).style.display = 'block';
  },

  showModuleComponent: (id, courseType) => {
    $(id).style.display = 'block';

    $('#crew-manage-title').innerHTML = `${courseType} 크루 관리`;
    $('#crew-list-title').innerHTML = `${courseType} 크루 목록`;
  },
};

export default DOMUtils;
