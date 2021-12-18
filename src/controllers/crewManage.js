import { $ } from '../utils/dom.js';
import { renderCrewManage, renderFrontEnd } from '../views/crewManageView.js';
import { isValidInputName } from '../utils/validation.js';

// eslint-disable-next-line max-lines-per-function
export default function HandleFrontEndCoures() {
  this.init = () => {
    renderFrontEnd();
  };

  $('#add-crew-buttton').addEventListener('click', (event) => {
    event.preventDefault();
    const inputName = $('#crew-name-input').value;

    if (!isValidInputName(inputName)) {
      return;
    }
  });

  this.init();
}

export const handleCrewManageTap = () => {
  renderCrewManage();

  $('#frontend-course').addEventListener('click', () => new HandleFrontEndCoures());
};
