import { MAIN, COURSE, CREW_MANAGE_DOM_SELECTOR } from '../constants.js';
import Crew from '../Crew.js';
import printAddCrewForm from './printAddCrewForm.js';
import isValidName from '../utils/isValidName.js';

const selectCourseEvent = (event) => {
  if (event.target.name !== COURSE) return;

  const $courseSelectionSection = event.target.closest('section');
  while ($courseSelectionSection.nextSibling) {
    $courseSelectionSection.nextSibling.remove();
  }

  printAddCrewForm(event.target.value);
};

const addCrewEvent = (crewManager) => {
  return (event) => {
    if (event.target.id !== CREW_MANAGE_DOM_SELECTOR.addCrewButton) return;
    event.preventDefault();

    const course = event.target.closest('section').dataset.course;
    const name = document.getElementById(CREW_MANAGE_DOM_SELECTOR.crewNameInput).value;

    if (!isValidName(name, crewManager)) return;

    const crew = new Crew(course, name);
    crewManager.add(crew);
  };
};

const attachMainEvent = (crewManager) => {
  const $main = document.querySelector(MAIN);
  $main.addEventListener('click', selectCourseEvent);
  $main.addEventListener('click', addCrewEvent(crewManager));
};

export default attachMainEvent;
