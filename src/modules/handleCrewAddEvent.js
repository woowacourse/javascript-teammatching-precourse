import {
  FROINTEND_STORAGE_NAME,
  FRONT_END_TABLE_NAME,
  BACK_END_TABLE_NAME,
} from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import setStorage from '../store/setStorage.js';
import renderCrewTable from '../views/renderCrewTable.js';
import checkValidCrewNameInput from './checkValidCrewNameInput.js';

function getCourseTitle(courseType) {
  if (courseType === FROINTEND_STORAGE_NAME) {
    return FRONT_END_TABLE_NAME;
  } else {
    return BACK_END_TABLE_NAME;
  }
}

export default function handleCrewAddEvent(courseType) {
  $('#add-crew-button').addEventListener('click', () => {
    const crewNameInput = $('#crew-name-input').value;
    if (checkValidCrewNameInput(crewNameInput, courseType) === true) {
      setStorage(crewNameInput, courseType);
      renderCrewTable(getCourseTitle(), courseType);
    }
  });
}
