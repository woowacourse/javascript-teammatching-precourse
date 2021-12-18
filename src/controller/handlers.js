import {
  saveCrewNameToStorage,
  switchToCrewTab,
  switchToTeamTab,
  deleteNameFromList,
} from './controller.js';
import { $ } from '../dom/constants.js';
import { crewUserInput } from './input-validator.js';
import {
  backInputChecked,
  backradioButton,
  frontInputChecked,
  frontradioButton,
} from '../view/display.js';

const tabButtonHandler = () => {
  const $crewTabButton = $('#crew-tab');
  const $teamTabButton = $('#team-tab');

  $crewTabButton.addEventListener('click', switchToCrewTab);
  $teamTabButton.addEventListener('click', switchToTeamTab);
};

const crewNameButtonHandler = () => {
  const $crewNameButton = $('#add-crew-buttton');

  $crewNameButton.addEventListener('click', (e) => {
    e.preventDefault();
    saveCrewNameToStorage(crewUserInput());
    deleteButtonHandler();
  });
};

const radioButtonHandler = () => {
  const $frontRadioButton = $('#frontend-course');
  const $backRadioButton = $('#backend-course');

  $frontRadioButton.addEventListener('change', () => {
    frontradioButton(), frontInputChecked();
  });
  $backRadioButton.addEventListener('change', () => {
    backradioButton(), backInputChecked();
  });
};

const deleteButtonHandler = () => {
  const $deleteButton = $('#delete-crew-buttton');

  $deleteButton.addEventListener('click', (e) => {
    deleteNameFromList(e.target);
  });
};

export const handlers = () => {
  tabButtonHandler();
  crewNameButtonHandler();
  radioButtonHandler();
};
