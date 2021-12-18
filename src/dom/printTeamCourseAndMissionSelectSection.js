import { TEAM_MISSION_DOM_SELECTOR, SELECT_COURSE_OPTION, SELECT_MISSION_OPTION, CONFIRM, SELECT_COURSE_MISSION_TITLE, MAIN } from '../constants.js';
import makeElement from './makeElement.js';
import makeSection from './makeSection.js';
import makeButton from './makeButton.js';

const makeSelect = (id, options) => {
  const $select = makeElement('select');
  $select.setAttribute('id', id);

  options.forEach((option) => {
    const $option = makeElement('option', option.text);
    $option.setAttribute('value', option.value);

    $select.appendChild($option);
  });

  return $select;
};

const makeForm = () => {
  const $form = makeElement('form');

  const $courseSelect = makeSelect(TEAM_MISSION_DOM_SELECTOR.courseSelect, SELECT_COURSE_OPTION);
  const $missionSelect = makeSelect(TEAM_MISSION_DOM_SELECTOR.missionSelect, SELECT_MISSION_OPTION);
  const $showTeamMatcherButton = makeButton(CONFIRM, TEAM_MISSION_DOM_SELECTOR.showTeamMatcherButton, 'submit');

  $form.appendChild($courseSelect);
  $form.appendChild($missionSelect);
  $form.appendChild($showTeamMatcherButton);

  return $form;
};

const printTeamCourseAndMissionSelectSection = () => {
  const $form = makeForm();
  const $section = makeSection(SELECT_COURSE_MISSION_TITLE, $form);

  const $main = document.querySelector(MAIN);
  $main.appendChild($section);
};

export default printTeamCourseAndMissionSelectSection;
