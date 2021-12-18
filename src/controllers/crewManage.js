import { $ } from '../utils/dom.js';
import { renderCrewManage, renderFrontEnd, renderCrewList } from '../views/crewManageView.js';
import { isValidInputName } from '../utils/validation.js';
import { getLocalStorage, setLocalStorage } from '../utils/storage.js';
import { STORAGE_NAME } from '../utils/constants.js';

// eslint-disable-next-line max-lines-per-function
export default function HandleFrontEndCoures() {
  this.crews = [];

  this.init = () => {
    renderFrontEnd();
    const storedFrontList = getLocalStorage(STORAGE_NAME.FRONT);
    if (storedFrontList) {
      this.crews = storedFrontList;
      renderCrewList(storedFrontList);
    }
  };

  $('#add-crew-buttton').addEventListener('click', (event) => {
    event.preventDefault();
    const inputName = $('#crew-name-input').value;

    if (!isValidInputName(inputName)) {
      return;
    }

    this.crews.push(inputName);
    setLocalStorage(STORAGE_NAME.FRONT, this.crews);
    renderCrewList(this.crews);
  });

  this.init();
}

export const handleCrewManageTap = () => {
  renderCrewManage();

  $('#frontend-course').addEventListener('click', () => new HandleFrontEndCoures());
};
