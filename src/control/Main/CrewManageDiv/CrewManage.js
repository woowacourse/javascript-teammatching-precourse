import { $ } from '../../../common/element.js';
import {
  getLocalStorageArray,
  setLocalStorage,
} from '../../../common/localStorage.js';
import { updateCrewList } from '../../../view/Main/CrewManageNav/CrewList.js';

function getNewCrew() {
  const crewNameInput = $('crew-name-input').value;
  const newCrew = {
    name: crewNameInput,
  };

  return newCrew;
}

function setCrewLocalStorage() {
  const crews = getLocalStorageArray('crew');
  const newCrew = getNewCrew();
  crews.push(newCrew);
  setLocalStorage('crew', JSON.stringify(crews));
}

function onCrewAddClick(event) {
  event.preventDefault();

  setCrewLocalStorage();
  updateCrewList();
}

export default function crewAdd() {
  $('add-crew-buttton').addEventListener('click', onCrewAddClick);
}
