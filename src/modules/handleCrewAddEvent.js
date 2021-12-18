import { $ } from '../dom/dom.js';
import setStorage from '../store/setStorage.js';
import checkValidCrewNameInput from './checkValidCrewNameInput.js';

export default function handleCrewAddEvent(courseType) {
  $('#add-crew-button').addEventListener('click', () => {
    let crewNameInput = $('#crew-name-input').value;
    if (checkValidCrewNameInput(crewNameInput, courseType)) {
      setStorage(crewNameInput, courseType);
    }
  });
}
