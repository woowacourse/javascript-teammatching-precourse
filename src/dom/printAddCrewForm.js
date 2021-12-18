import { ADD_CREW_FORM_TITLE, CREW_NAME, CONFIRM, CREW_MANAGE_DOM_SELECTOR, MAIN } from '../constants.js';
import makeElement from './makeElement.js';
import makeInput from './makeInput.js';
import makeButton from './makeButton.js';
import makeSection from './makeSection.js';

const makeForm = () => {
  const $form = makeElement('form');
  const $label = makeElement('label', CREW_NAME);
  const $input = makeInput(CREW_MANAGE_DOM_SELECTOR.crewNameInput);
  const $button = makeButton(CONFIRM, CREW_MANAGE_DOM_SELECTOR.addCrewButton, 'submit');

  $form.appendChild($label);
  $form.appendChild($input);
  $form.appendChild($button);

  return $form;
};

const printAddCrewForm = (course) => {
  const $section = makeSection(ADD_CREW_FORM_TITLE[course], makeForm());
  $section.dataset.course = course;
  const $main = document.querySelector(MAIN);
  $main.appendChild($section);
};

export default printAddCrewForm;
