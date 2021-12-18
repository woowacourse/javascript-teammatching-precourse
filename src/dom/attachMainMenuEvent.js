import { MAIN, MAIN_MENU } from '../constants.js';
import printCourseSelectionSection from './printCourseSelectionSection.js';

const clearMain = () => {
  const $main = document.querySelector(MAIN);
  $main.innerHTML = '';
};

const attachMainMenuEvent = () => {
  const $crewTab = document.getElementById(MAIN_MENU[0].id);
  $crewTab.addEventListener('click', () => {
    clearMain();
    printCourseSelectionSection();
  });
};

export default attachMainMenuEvent;
