import { $ } from '../dom/dom.js';
import setStorage from '../store/setStorage.js';
import renderCrewTable from '../views/renderCrewTable.js';
import checkValidCrewNameInput from './checkValidCrewNameInput.js';

import getCourseTitle from './getCourseTitle.js';
import handleCrewDeleteEvent from './handleCrewDeleteEvent.js';

export default function handleCrewAddEvent(courseType) {
  $('#add-crew-button').addEventListener('click', () => {
    const crewNameInput = $('#crew-name-input').value;
    if (checkValidCrewNameInput(crewNameInput, courseType) === true) {
      setStorage(crewNameInput, courseType);
      renderCrewTable(getCourseTitle(courseType), courseType);
      handleCrewDeleteEvent(courseType);
    }
  });
}
