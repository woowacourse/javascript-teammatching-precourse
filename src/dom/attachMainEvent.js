import { MAIN, COURSE } from '../constants.js';
import printAddCrewForm from './printAddCrewForm.js';

const selectCourseEvent = (event) => {
  if (event.target.name !== COURSE) return;

  const $courseSelectionSection = event.target.closest('section');

  while ($courseSelectionSection.nextSibling) {
    $courseSelectionSection.nextSibling.remove();
  }

  printAddCrewForm(event.target.value);
};

const attachMainEvent = () => {
  const $main = document.querySelector(MAIN);
  $main.addEventListener('click', selectCourseEvent);
};

export default attachMainEvent;
