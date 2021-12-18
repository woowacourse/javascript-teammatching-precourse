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
};

export default DOMUtils;
