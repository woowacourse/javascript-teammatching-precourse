import { $ } from '../utils/dom.js';
import { renderFrontEnd, renderCrewList } from '../views/crewManageView.js';
import { isValidInputName } from '../utils/validation.js';
import { getLocalStorage, setLocalStorage } from '../utils/storage.js';
import { DELETE_MESSAGE, STORAGE_NAME } from '../utils/constants.js';

// eslint-disable-next-line max-lines-per-function
export default function HandleFrontEndCoures() {
  this.crews = [];

  this.init = () => {
    renderFrontEnd();
    const storedFrontList = getLocalStorage(STORAGE_NAME.FRONT);
    if (storedFrontList) {
      this.crews = storedFrontList;
      renderCrewList(storedFrontList);
      // eslint-disable-next-line no-use-before-define
      removeCrewId();
    }
  };

  const handleDeleteButton = () => {
    if (!confirm(DELETE_MESSAGE)) {
      return;
    }
  };

  const removeCrewId = () => {
    const $crewId = document.querySelectorAll('#delete-crew-buttton');
    $crewId.forEach((crew) => crew.addEventListener('click', handleDeleteButton));
  };

  $('#add-crew-buttton').addEventListener('click', (event) => {
    event.preventDefault();
    const inputName = $('#crew-name-input').value;

    if (!isValidInputName(STORAGE_NAME.FRONT, inputName)) {
      return;
    }

    this.crews.push(inputName);
    setLocalStorage(STORAGE_NAME.FRONT, this.crews);
    renderCrewList(this.crews);
    removeCrewId();
  });

  this.init();
}
