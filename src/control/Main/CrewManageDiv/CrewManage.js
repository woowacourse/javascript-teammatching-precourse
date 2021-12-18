import { MESSAGE } from '../../../common/constant.js';
import { $ } from '../../../common/element.js';
import {
  getLocalStorageArray,
  setLocalStorage,
} from '../../../common/localStorage.js';
import { updateCrewList } from '../../../view/Main/CrewManageNav/CrewList.js';
import { checkInputValidation, getInputValidation } from './NameValidation.js';

function getNewCrew() {
  const crewNameInput = $('crew-name-input').value;
  const newCrew = {
    name: crewNameInput,
  };

  return newCrew;
}

function setAddCrewsLocalStorage() {
  const crews = getLocalStorageArray('crew');
  const newCrew = getNewCrew();
  crews.push(newCrew);
  setLocalStorage('crew', JSON.stringify(crews));
}

function onCrewAddClick(event) {
  event.preventDefault();

  checkInputValidation();
  if (!getInputValidation()) return;

  setAddCrewsLocalStorage();
  updateCrewList();
}

export function crewAdd() {
  $('add-crew-buttton').addEventListener('click', onCrewAddClick);
}

function getCrewIdx(name) {
  const crews = getLocalStorageArray('crew');
  const crewIdx = crews.findIndex((i) => i.name === name);

  return crewIdx;
}

function setDeleteCrewsLocalStorage(crewIdx) {
  const crews = getLocalStorageArray('crew');
  crews.splice(crewIdx, 1);
  setLocalStorage('crew', JSON.stringify(crews));
}

function onCrewDeleteClick(event) {
  event.preventDefault();

  if (!confirm(MESSAGE.CONFIRM)) return;

  const name = event.target.dataset.crewName;
  const crewIdx = getCrewIdx(name);
  setDeleteCrewsLocalStorage(crewIdx);
  updateCrewList();
}

function getDeleteButtons() {
  return document.getElementsByClassName('delete-crew-button');
}

export function crewDelete() {
  const deleteButtons = [...getDeleteButtons()];

  deleteButtons.forEach((button) => {
    button.addEventListener('click', onCrewDeleteClick);
  });
}
