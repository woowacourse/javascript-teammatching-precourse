import { getDom } from '../utils/handleDOM.js';
import { ID_ADD_CREW_INPUT, ID_FORM_SECTION } from './constants.js';

export const addCrew = function handleAddCrew(
  course,
  formContainer,
  name,
  renderTable
) {
  const input = getDom(`#${ID_ADD_CREW_INPUT}`);
  const crewName = input.value;
  course.addCrewToCourse(crewName);
  renderTable(formContainer, name, course);
  input.value = '';
};

export const removeCrew = function handleRemoveCrew(
  e,
  course,
  renderTable,
  courseName
) {
  const name = e.target.parentNode.querySelector('.crew-name');
  course.removeCrewFromCourse(name);
  renderTable(getDom(`#${ID_FORM_SECTION}`), courseName, course);
};
