import { COURSE, HEADER } from '../../../common/constant.js';
import * as elem from '../../../common/element.js';

function createCourseSelectHeader() {
  return elem.createHeader('h3', HEADER.COURSE_SELECT);
}

function createCourseSelectRadioButtons() {
  return `
    <input id="frontend-course" type="radio" name="course" value="frontend" />
    <label for="frontend">${COURSE.FRONTEND}</label>
    <input id="backend-course" type="radio" name="course" value="backend" />
    <label for="backend">${COURSE.BACKEND}</label>
  `;
}

function createCourseSelectRadioButtonsDiv() {
  const courseSelectRadioButtonsDiv = elem.createDiv();
  const courseSelectRadioButtons = createCourseSelectRadioButtons();
  courseSelectRadioButtonsDiv.innerHTML += courseSelectRadioButtons;

  return courseSelectRadioButtonsDiv;
}

export default function createCourseSelect() {
  const courseSelect = elem.createSection();
  const courseSelectHeader = createCourseSelectHeader();
  courseSelect.append(courseSelectHeader);
  const courseSelectRadioButtonsDiv = createCourseSelectRadioButtonsDiv();
  courseSelect.append(courseSelectRadioButtonsDiv);

  return courseSelect;
}
