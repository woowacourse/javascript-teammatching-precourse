import { CONSTANTS } from '../../constants/constants.js';
import Component from '../../core/Component.js';
import { crewNameVaildCheck } from '../../models/UserInputCheck.js';
import { storageManager } from '../../utils/data-tools.js';
import { $, removeTags } from '../../utils/element-tools.js';
import { errorAlert } from '../../utils/error-alert.js';

export default class CrewNameInput extends Component {
  htmlTemplate() {
    return `
    <h3>프론트엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id="crew-name-input" />
      <button id="add-crew-buttton">확인</button>
    </form>
    `;
  }

  bindEvents() {
    this.addEvent('click', '#add-crew-button', this.handelCrewAdd.bind(this));
  }

  handelCrewAdd(event) {
    event.preventDefault();

    const { crewManager, state } = this._props;
    const $userInput = $('#crew-name-input');

    const crewName = removeTags($userInput.value);

    const vaildCheckCode = crewNameVaildCheck(crewName, crewManager.filterList);
    if (errorAlert(vaildCheckCode) === true) return false;

    const crewList = [...crewManager.add(crewName).list];
    storageManager.set(CONSTANTS.STORAGE_KEY_CREW, crewList);

    state.value = crewManager.filterList;
    $userInput.value = '';
  }
}
