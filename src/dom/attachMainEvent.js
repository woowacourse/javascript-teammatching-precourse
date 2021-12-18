import { MAIN, COURSE, CREW_MANAGE_DOM_SELECTOR, DELETE_BUTTON, TEAM_MISSION_DOM_SELECTOR } from '../constants.js';
import Crew from '../Crew.js';
import printAddCrewForm from './printAddCrewForm.js';
import isValidName from '../utils/isValidName.js';
import printCrewList from './printCrewList.js';
import removeInputValue from './removeInputValue.js';
import printTeamMatchingSection from './printTeamMatchingSection.js';

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

const selectCourseAndMissionEvent = (crewManager) => {
  return (event) => {
    if (event.target.id !== TEAM_MISSION_DOM_SELECTOR.showTeamMatcherButton) return;
    event.preventDefault();

    const $selectCourseAndMissionSection = event.target.closest('section');
    while ($selectCourseAndMissionSection.nextSibling) {
      $selectCourseAndMissionSection.nextSibling.remove();
    }
    const course = document.getElementById(TEAM_MISSION_DOM_SELECTOR.courseSelect).value;
    const mission = document.getElementById(TEAM_MISSION_DOM_SELECTOR.missionSelect).value;

    printTeamMatchingSection(course, mission, crewManager);
  };
};

const matchEvent = (teamMatchManager, crewManager) => {
  return (event) => {
    if (event.target.id !== TEAM_MISSION_DOM_SELECTOR.matchTeamButton) return;
    event.preventDefault();

    const course = document.getElementById(TEAM_MISSION_DOM_SELECTOR.courseSelect).value;
    const mission = document.getElementById(TEAM_MISSION_DOM_SELECTOR.missionSelect).value;
    const teamMemberCount = document.getElementById(TEAM_MISSION_DOM_SELECTOR.teamMemberCountInput).value;

    teamMatchManager.match(course, mission, teamMemberCount, crewManager);
  };
};

const attachMainEvent = (crewManager, teamMatchManager) => {
  const $main = document.querySelector(MAIN);
  $main.addEventListener('click', selectCourseEvent(crewManager));
  $main.addEventListener('click', addCrewEvent(crewManager));
  $main.addEventListener('click', deleteCrewEvent(crewManager));
  $main.addEventListener('click', selectCourseAndMissionEvent(crewManager));
  $main.addEventListener('click', matchEvent(teamMatchManager, crewManager));
};

export default attachMainEvent;
