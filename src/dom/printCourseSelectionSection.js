import { SELECT_COURSE, COURSE_RADIO, COURSE, RADIO, MAIN } from '../constants.js';
import makeElement from './makeElement.js';
import makeSection from './makeSection.js';

const makeRadioInput = (id, value) => {
  const $input = makeElement('input');
  $input.setAttribute('id', id);
  $input.setAttribute('type', RADIO);
  $input.setAttribute('name', COURSE);
  $input.setAttribute('value', value);

  return $input;
};

const makeRadioLabel = (forValue, text) => {
  const $label = makeElement('label', text);
  $label.setAttribute('for', forValue);

  return $label;
};

const makeCourse = () => {
  const $div = makeElement('div');

  COURSE_RADIO.forEach((course) => {
    $div.appendChild(makeRadioInput(course.id, course.value));
    $div.appendChild(makeRadioLabel(course.value, course.text));
  });

  return $div;
};

const printCourseSelectionSection = () => {
  const $course = makeCourse();
  const $section = makeSection(SELECT_COURSE, $course);

  const $main = document.querySelector(MAIN);
  $main.appendChild($section);
};

export default printCourseSelectionSection;
