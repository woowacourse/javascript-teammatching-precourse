import { renderHeader } from './view/component/index.mjs';
import {
  renderCourseChoice,
  renderInputCrewNameAndList
} from './view/index.mjs';

import { valueToString } from './util/valueToString.mjs';

window.addEventListener('DOMContentLoaded', () => {
  renderHeader();
});

// [크루 관리]
window.addEventListener('click', e => {
  if (e.target !== document.querySelector('#crew-tab')) return;
  renderCourseChoice();
});

// [크루 관리 - 프론트 엔드]
window.addEventListener('click', e => {
  if (e.target.type !== 'radio') return;
  const frontEndOrBackEndString = valueToString(e.target.value);
  renderInputCrewNameAndList(frontEndOrBackEndString);
});
