import { MAIN_MENU } from '../constants.js';
import printCourseSelectionSection from './printCourseSelectionSection.js';

const attachMainMenuEvent = () => {
  const $crewTab = document.getElementById(MAIN_MENU[0].id);
  $crewTab.addEventListener('click', () => {
    printCourseSelectionSection();
  });
};

export default attachMainMenuEvent;
