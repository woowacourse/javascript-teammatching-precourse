import { MAIN, COURSE, CREW_MANAGE_DOM_SELECTOR, DELETE_BUTTON } from '../constants.js';
import Crew from '../Crew.js';
import printAddCrewForm from './printAddCrewForm.js';
import isValidName from '../utils/isValidName.js';
import printCrewList from './printCrewList.js';
import removeInputValue from './removeInputValue.js';

const selectCourseEvent = (crewManager) => {
  return (event) => {
    if (event.target.name !== COURSE) return;

    const $courseSelectionSection = event.target.closest('section');
    while ($courseSelectionSection.nextSibling) {
      $courseSelectionSection.nextSibling.remove();
    }

    printAddCrewForm(event.target.value);
    printCrewList(event.target.value, crewManager);
  };
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
    removeInputValue(CREW_MANAGE_DOM_SELECTOR.crewNameInput);
    printCrewList(course, crewManager);
  };
};

const deleteCrewEvent = (crewManager) => {
  return (event) => {
    if (event.target.className !== DELETE_BUTTON.className) return;

    const course = event.target.closest('section').dataset.course;
    const index = event.target.dataset['index'];

    crewManager.deleteCrew(course, index);
    printCrewList(course, crewManager);
  };
};

const attachMainEvent = (crewManager) => {
  const $main = document.querySelector(MAIN);
  $main.addEventListener('click', selectCourseEvent(crewManager));
  $main.addEventListener('click', addCrewEvent(crewManager));
  $main.addEventListener('click', deleteCrewEvent(crewManager));
};

export default attachMainEvent;
