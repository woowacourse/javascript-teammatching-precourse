export const $ = selector => document.querySelector(selector);

const DOMUtils = {
  hideComponents: () => {
    Array.from($('#component').children).forEach(menu => (menu.style.display = 'none'));
  },
};

export default DOMUtils;
