import {
  header,
  crewMain,
  teamMain,
  FrontendcrewListTable,
  backendCrewListTable,
} from '../dom/template.js';
import {
  backendCrewNameStorage,
  frontendCrewNameStorage,
} from '../storage/local-storage.js';
import {
  renderInApp,
  crewTab,
  teamTab,
  defaultDisplay,
  defaultRadioDisplay,
  addCrewListTable,
} from '../view/display.js';
import { crewNameValidator } from './input-validator.js';
import { $ } from '../dom/constants.js';

export const app = () => {
  renderInApp('afterbegin', header);
  renderInApp('beforeend', crewMain);
  renderInApp('beforeend', teamMain);
  defaultDisplay();
};

export const switchToCrewTab = () => {
  crewTab();
  defaultRadioDisplay();
};

export const switchToTeamTab = () => {
  teamTab();
  defaultRadioDisplay();
};

export const saveCrewNameToStorage = (userInput) => {
  if (crewNameValidator(userInput)) {
    const $frontRadioButton = $('#frontend-course');
    const $backRadioButton = $('#backend-course');

    if ($frontRadioButton.checked === true) {
      frontendCrewNameStorage(userInput);
      addFrontCrewListToTable();
      addFrontcrewNameToTable();
    } else if ($backRadioButton.checked === true) {
      backendCrewNameStorage(userInput);
      addBackCrewListTable();
      addFrontCrewListToTable();
    }

    return true;
  }
};

export const addFrontCrewListToTable = () => {
  addCrewListTable('afterbegin', FrontendcrewListTable);
};

const addFrontcrewNameToTable = () => {
  const $tableRow = $('.front-crew-member');
  let crewNameList = JSON.parse(localStorage.getItem('frontEndCrew'));

  for (let i = 0; i < crewNameList.length; i++) {
    Array.from($tableRow.children)[0].innerHTML =
      crewNameList.indexOf(crewNameList[i]) + 1;
    Array.from($tableRow.children)[1].innerHTML = crewNameList[i].name;
  }
};

export const deleteNameFromList = (target) => {
  target.parentNode.parentNode.remove();
};
