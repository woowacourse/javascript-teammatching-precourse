import { MAIN, MAIN_MENU } from '../constants.js';
import printCourseSelectionSection from './printCourseSelectionSection.js';
import printTeamCourseAndMissionSelectSection from './printTeamCourseAndMissionSelectSection.js';

const clearMain = () => {
  const $main = document.querySelector(MAIN);
  $main.innerHTML = '';
};

const attachMainMenuEvent = () => {
  const $crewTab = document.getElementById(MAIN_MENU[0].id);
  const $teamTab = document.getElementById(MAIN_MENU[1].id);

  $crewTab.addEventListener('click', () => {
    clearMain();
    printCourseSelectionSection();
  });

  $teamTab.addEventListener('click', () => {
    clearMain();
    printTeamCourseAndMissionSelectSection();
  });
};

export default attachMainMenuEvent;
