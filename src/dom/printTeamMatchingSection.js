import {
  CREW_LIST_TITLE,
  PERSON_COUNT_PER_TEAM,
  TEAM_MATCHING,
  TEAM_MATCHING_SUBTITLE,
  TEAM_MISSION_DOM_SELECTOR,
  SELECTED_COURSE_TITLE,
  SELECT_MISSION_OPTION,
  TEAM_MATCHING_TITLE,
  MAIN,
} from '../constants.js';
import makeButton from './makeButton.js';
import makeElement from './makeElement.js';
import makeInput from './makeInput.js';
import makeSection from './makeSection.js';

const makeForm = () => {
  const $form = makeElement('form');
  const $label = makeElement('label', PERSON_COUNT_PER_TEAM);
  const $input = makeInput(TEAM_MISSION_DOM_SELECTOR.teamMemberCountInput, 'number');
  const $button = makeButton(TEAM_MATCHING, TEAM_MISSION_DOM_SELECTOR.matchTeamButton, 'submit');

  $form.appendChild($label);
  $form.appendChild($input);
  $form.appendChild($button);

  return $form;
};

const makeTeamMatchingDiv = () => {
  const $div = makeElement('div');
  const $p = makeElement('p', TEAM_MATCHING_SUBTITLE);

  $div.appendChild($p);
  $div.appendChild(makeForm());

  return $div;
};

const makeCrewList = (crewList) => {
  const $ul = makeElement('ul');

  crewList.forEach((crew) => {
    const $li = makeElement('li', crew);
    $ul.appendChild($li);
  });

  return $ul;
};

const getMissionText = (mission) => {
  const missionObject = SELECT_MISSION_OPTION.filter((missionInfo) => missionInfo.value === mission);
  return missionObject[0].text;
};

const printTeamMatchingSection = (course, mission, crewManager) => {
  const $teamMatchingFormDiv = makeTeamMatchingDiv();
  const $crewListTitle = makeElement('h4', CREW_LIST_TITLE);
  const $crewList = makeCrewList(crewManager.getCrewList(course));
  const $div = makeElement('div');

  $div.appendChild($teamMatchingFormDiv);
  $div.appendChild($crewListTitle);
  $div.appendChild($crewList);

  const $section = makeSection(`${SELECTED_COURSE_TITLE[course]} ${getMissionText(mission)} ${TEAM_MATCHING_TITLE}`, $div);
  const $main = document.querySelector(MAIN);

  $main.appendChild($section);
};

export default printTeamMatchingSection;
