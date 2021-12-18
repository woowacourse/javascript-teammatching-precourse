import { renderHeader } from './view/component/index.mjs';
import { renderCourseChoice } from './view/index.mjs';

window.addEventListener('DOMContentLoaded', () => {
  renderHeader();
});

// [크루 관리]
window.addEventListener('click', e => {
  if (e.target !== document.querySelector('#crew-tab')) return;
  renderCourseChoice();
});
